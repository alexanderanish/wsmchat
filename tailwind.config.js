module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
        'post':'#171930',
        'post-card':'#202338',
        'filter-pill':'#15162d',
        'flair-background':'rgba(252, 145, 0, 0.1)',
        'flair-text':'#FC9100',
        'thrust-text':'#5CC489',
        'pill-color':'#232841',
        'post-time':'rgba(255, 255, 255, 0.3);',
        'post-name':'rgba(255, 255, 255, 0.8)',
      
      },
      fontSize: {
        postNameFontSize:['12px','16px'],
        postThrustFontSize:['11px','16px'],
        postTagFontSize:['10px','12px'],
        postFilterTitleFontSize:['12px','17px'],
      }
    },

  },
  plugins: [],
}
