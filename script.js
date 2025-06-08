const quotes = [
    {
        quote: "We must examine opposite ends of the spectrum when we seek balance. "
            + "If we desire comfort we must also know discomfort. If we seek relaxation then we must also understand stress. "
            + "Knowing both sides draws a complete map with which we can navigate towards balance more capably.",
        author: "Shi Heng Yi"
    },
    {
        quote: "If you want an apple tree, first you must plant the seed.",
        author: "Shi Heng Yi"
    },
    {
        quote: "There are two mistakes along the way to Self-Mastery: Not starting it and not going all the way.",
        author: "Shi Heng Yi"
    },
    {
        quote: "What begins in you, you can influence.",
        author: "Shi Heng Zong"
    },
    {
        quote: "The virtues to be expected: discipline, self-control, modesty, benevolence",
        author: "Shaolin WuDe (Virtues)"
    },
    {
        quote: "The virtues to be learned: humility, respect, righteousness, trust, loyalty, will, "
            + "perseverance, persitence, patience, courage",
        author: "Shaolin WuDe (Virtues)"
    }
];
  
window.onload = function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selected = quotes[randomIndex];
    
    document.getElementById('quote').textContent = `"${selected.quote}"`;
    document.getElementById('author').textContent = `- ${selected.author}`;
};
  