# CV Files Setup Instructions

## Required CV Files

Your portfolio website now has CV download functionality. To make it work, you need to add two PDF files to the root directory of your project:

### Files Needed:
1. **cv_en.pdf** - Your CV in English
2. **cv_fr.pdf** - Your CV in French

### Where to Place Them:
Place both PDF files in the **root directory** of your project, alongside:
- `index.html`
- `styles.css`
- `script.js`
- `ahmed.png`

### File Structure Should Look Like:
```
soahmedamine.github.io/
├── index.html
├── styles.css
├── script.js
├── ahmed.png
├── cv_en.pdf          ← Add this file
├── cv_fr.pdf          ← Add this file
├── CNAME
└── README.md
```

### What Happens When Users Click:
- **English CV Button**: Downloads `Ahmed_Amine_Soualhi_CV_EN.pdf`
- **French CV Button**: Downloads `Ahmed_Amine_Soualhi_CV_FR.pdf`

### Important Notes:
1. File names are **case-sensitive** - use exactly `cv_en.pdf` and `cv_fr.pdf`
2. Files must be in **PDF format**
3. If the PDF files don't exist, clicking the buttons will show a 404 error
4. Keep your CV files updated regularly

### Testing:
After adding the files:
1. Commit and push to GitHub
2. Wait a few minutes for GitHub Pages to update
3. Visit your website: https://soahmedamine.github.io
4. Click the CV download buttons in the hero section
5. Verify both PDFs download correctly

### Button Translations:
The CV download buttons automatically translate based on the selected language:
- **English**: CV (EN) / CV (FR)
- **French**: CV (EN) / CV (FR)
- **Arabic**: السيرة الذاتية (EN) / السيرة الذاتية (FR)
- **German**: Lebenslauf (EN) / Lebenslauf (FR)
