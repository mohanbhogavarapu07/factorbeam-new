/**
 * Security Utilities for FactorBeam Platform
 * 
 * This module provides comprehensive security utilities for protecting
 * the application against common web vulnerabilities.
 */

/**
 * Sanitize HTML content to prevent XSS attacks
 * Remove dangerous HTML tags and attributes
 */
export const sanitizeHtml = (input: string): string => {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};

/**
 * Sanitize URL to prevent javascript: and data: URI attacks
 */
export const sanitizeUrl = (url: string): string => {
  const trimmed = url.trim().toLowerCase();
  
  // Block dangerous protocols
  const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];
  if (dangerousProtocols.some(protocol => trimmed.startsWith(protocol))) {
    return '#';
  }
  
  // Only allow http, https, mailto, tel
  const allowedProtocols = ['http://', 'https://', 'mailto:', 'tel:', '/'];
  const isAllowed = allowedProtocols.some(protocol => 
    trimmed.startsWith(protocol) || !trimmed.includes(':')
  );
  
  return isAllowed ? url : '#';
};

/**
 * Validate email format with strict rules
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 255;
};

/**
 * Rate limiter for client-side protection
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  
  constructor(
    private maxAttempts: number,
    private timeWindowMs: number
  ) {}
  
  canProceed(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    
    // Filter out old attempts
    const recentAttempts = userAttempts.filter(
      timestamp => now - timestamp < this.timeWindowMs
    );
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    this.attempts.set(identifier, [...recentAttempts, now]);
    return true;
  }
  
  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
  
  getWaitTime(identifier: string): number {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    const recentAttempts = userAttempts.filter(
      timestamp => now - timestamp < this.timeWindowMs
    );
    
    if (recentAttempts.length < this.maxAttempts) {
      return 0;
    }
    
    const oldestAttempt = Math.min(...recentAttempts);
    return Math.ceil((this.timeWindowMs - (now - oldestAttempt)) / 1000);
  }
}

/**
 * Content Security Policy headers (for deployment configuration)
 * These should be set at the server/CDN level
 */
export const CSP_HEADERS = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Note: Remove unsafe-* in production
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https:",
    "frame-ancestors 'none'",
  ].join('; '),
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
};

/**
 * Detect potential XSS patterns in user input
 */
export const detectXssPatterns = (input: string): boolean => {
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /onerror\s*=/gi,
    /onclick\s*=/gi,
    /onload\s*=/gi,
    /<iframe/gi,
    /<embed/gi,
    /<object/gi,
    /eval\s*\(/gi,
    /expression\s*\(/gi,
  ];
  
  return xssPatterns.some(pattern => pattern.test(input));
};

/**
 * Generate cryptographically secure random token
 */
export const generateSecureToken = (length: number = 32): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Secure string comparison to prevent timing attacks
 */
export const secureCompare = (a: string, b: string): boolean => {
  if (a.length !== b.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return result === 0;
};

/**
 * Security audit logger
 */
export class SecurityAuditLogger {
  private static logs: Array<{
    timestamp: string;
    event: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    details: any;
  }> = [];
  
  static log(
    event: string,
    severity: 'low' | 'medium' | 'high' | 'critical',
    details: any
  ): void {
    const logEntry = {
      timestamp: new Date().toISOString(),
      event,
      severity,
      details,
    };
    
    this.logs.push(logEntry);
    
    // In production, send to monitoring service
    if (severity === 'high' || severity === 'critical') {
      console.error('[SECURITY ALERT]', logEntry);
    } else {
      console.info('[SECURITY LOG]', logEntry);
    }
  }
  
  static getLogs() {
    return [...this.logs];
  }
  
  static clearLogs() {
    this.logs = [];
  }
}

/**
 * Input validation utilities
 */
export const InputValidation = {
  /**
   * Validate alphanumeric input
   */
  isAlphanumeric: (input: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(input);
  },
  
  /**
   * Validate text with allowed special characters
   */
  isValidText: (input: string): boolean => {
    return /^[a-zA-Z0-9\s.,!?'-]+$/.test(input);
  },
  
  /**
   * Validate phone number
   */
  isValidPhone: (phone: string): boolean => {
    return /^[+]?[\d\s()-]{10,}$/.test(phone);
  },
  
  /**
   * Validate length constraints
   */
  isValidLength: (input: string, min: number, max: number): boolean => {
    const length = input.trim().length;
    return length >= min && length <= max;
  },
};

/**
 * DDoS Protection Guidelines
 * 
 * Note: DDoS protection is primarily handled at the infrastructure level.
 * This application should be deployed behind:
 * 
 * 1. CDN with DDoS protection (Cloudflare, AWS CloudFront, etc.)
 * 2. Rate limiting at edge/load balancer level
 * 3. WAF (Web Application Firewall) rules
 * 4. Geographic restrictions if applicable
 * 
 * Client-side rate limiting is a supplementary measure only.
 */
export const DDOS_PROTECTION_CHECKLIST = [
  'Deploy behind CDN with DDoS protection',
  'Enable rate limiting at infrastructure level',
  'Configure WAF rules for common attack patterns',
  'Implement IP-based throttling',
  'Set up monitoring and alerting for traffic spikes',
  'Enable HTTPS with HSTS headers',
  'Use Brotli/Gzip compression to reduce bandwidth',
  'Implement request size limits',
  'Configure timeout limits for all requests',
  'Set up auto-scaling for traffic bursts',
] as const;