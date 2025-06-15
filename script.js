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

const displayRandomQuote = () => {
    const previousIndex = $('.quote-container').data('selectedIndex') ?? Math.floor(Math.random() * quotes.length);
    let selectedIndex = previousIndex + 1;

    if (selectedIndex >= quotes.length) {
        selectedIndex = 0;
    }

    const selected = quotes[selectedIndex];
    $('#quote').text(`"${selected.quote}"`);
    $('#author').text(`- ${selected.author}`);
    $('.quote-container').data('selectedIndex', selectedIndex);
};

$(document).ready(function() {
    displayRandomQuote();
    $('.quote-container').on('click', () => displayRandomQuote());
});
