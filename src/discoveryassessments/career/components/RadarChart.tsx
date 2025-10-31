import { QuizScores } from "../types/quiz";
import { riasecTypes } from "../data/riasecTypes";

interface RadarChartProps {
  scores: QuizScores;
}

const RadarChart = ({ scores }: RadarChartProps) => {
  const types = ['R', 'I', 'A', 'S', 'E', 'C'] as const;
  const maxScore = 10;
  const centerX = 250;
  const centerY = 280; // Shifted down to accommodate top label
  const radius = 180;

  // Calculate points for hexagon
  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI / 3) * index - Math.PI / 2;
    const distance = (value / maxScore) * radius;
    return {
      x: centerX + distance * Math.cos(angle),
      y: centerY + distance * Math.sin(angle),
    };
  };

  // Generate grid hexagons
  const gridLevels = [2, 4, 6, 8, 10];
  const gridPaths = gridLevels.map(level => {
    const points = types.map((_, index) => getPoint(index, level));
    return `M ${points[0].x} ${points[0].y} ` +
      points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ') +
      ' Z';
  });

  // Generate data polygon
  const dataPoints = types.map((type, index) => getPoint(index, scores[type]));
  const dataPath = `M ${dataPoints[0].x} ${dataPoints[0].y} ` +
    dataPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ') +
    ' Z';

  // Label positions (outside the hexagon)
  const labelRadius = radius + 60;
  const labels = types.map((type, index) => {
    const angle = (Math.PI / 3) * index - Math.PI / 2;
    return {
      type,
      x: centerX + labelRadius * Math.cos(angle),
      y: centerY + labelRadius * Math.sin(angle),
      score: scores[type],
    };
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 500 600" className="w-full h-auto" style={{ overflow: 'visible' }}>
        {/* Grid */}
        {gridPaths.map((path, i) => (
          <path
            key={i}
            d={path}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            opacity={0.3}
          />
        ))}

        {/* Axis lines */}
        {types.map((type, index) => {
          const point = getPoint(index, maxScore);
          return (
            <line
              key={type}
              x1={centerX}
              y1={centerY}
              x2={point.x}
              y2={point.y}
              stroke="hsl(var(--border))"
              strokeWidth="1"
              opacity={0.3}
            />
          );
        })}

        {/* Data polygon */}
        <path
          d={dataPath}
          fill="hsl(var(--accent) / 0.2)"
          stroke="hsl(var(--accent))"
          strokeWidth="3"
          className="animate-scaleIn"
        />

        {/* Data points */}
        {dataPoints.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="6"
            fill="hsl(var(--accent))"
            stroke="white"
            strokeWidth="2"
            className="animate-scaleIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}

        {/* Labels */}
        {labels.map((label, index) => {
          const typeData = riasecTypes[label.type];
          return (
            <g key={label.type}>
              {/* Background circle - all fully rounded now */}
              <circle
                cx={label.x}
                cy={label.y}
                r="35"
                fill="hsl(var(--card))"
                stroke={typeData.color}
                strokeWidth="2"
              />
              
              {/* Type letter */}
              <text
                x={label.x}
                y={label.y - 5}
                textAnchor="middle"
                className="text-sm font-bold fill-foreground"
              >
                {label.type}
              </text>
              
              {/* Score */}
              <text
                x={label.x}
                y={label.y + 10}
                textAnchor="middle"
                className="text-xs font-medium fill-muted-foreground"
              >
                {label.score}/10
              </text>
              
              {/* Persona name */}
              <text
                x={label.x}
                y={label.y + 50}
                textAnchor="middle"
                className="text-xs fill-muted-foreground"
              >
                {typeData.persona}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default RadarChart;
