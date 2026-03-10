#!/usr/bin/env node
const pkg = require('../node_modules/liquidjs/package.json');
const version = pkg.version;
const min = process.env.MIN_LIQUIDJS_VERSION || '10.25.0';

function parse(v) {
  return v.split('.').map((n) => Number(n));
}

function gte(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const av = a[i] || 0;
    const bv = b[i] || 0;
    if (av > bv) return true;
    if (av < bv) return false;
  }
  return true;
}

if (!gte(parse(version), parse(min))) {
  console.error(`liquidjs ${version} is below minimum safe version ${min}`);
  process.exit(1);
}

console.log(`liquidjs ${version} satisfies minimum ${min}`);
