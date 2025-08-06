#!/usr/bin/env node

const path = require("path");
const fs = require("fs-extra");

const targetDir = process.argv[2] || "."; // Defaults to current dir if not provided
const destPath = path.resolve(process.cwd(), targetDir);
const templatePath = path.resolve(__dirname, "../template");

fs.copy(templatePath, destPath, { overwrite: true })
  .then(() => {
    console.log(`✅ Project created at: ${destPath}`);
    console.log("👉 Next steps:");
    if (targetDir !== ".") console.log(`   cd ${targetDir}`);
    console.log("   npm install");
    console.log("   npm run dev");
  })
  .catch((err) => {
    console.error("❌ Failed to copy template files:", err);
  });
