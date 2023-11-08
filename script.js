let pythonCounter = 0;
let javascriptCounter = 0;
let javaCounter = 0;
let csharpCounter = 0;
let rubyCounter = 0;
let swiftCounter = 0;
let htmlCssCounter = 0;

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        pythonCounter = 0;
        javascriptCounter = 0;
        javaCounter = 0;
        csharpCounter = 0;
        rubyCounter = 0;
        swiftCounter = 0;
        htmlCssCounter = 0;
        const goal = document.getElementById('q1').value;
        const type = document.getElementById('q2').value;
        const platform = document.getElementById('q3').value;
        const support = document.getElementById('q4').value;
        const readability = document.getElementById('q5').value;

        if (goal === 'a') {
            pythonCounter += 10;
            javascriptCounter += 10;
            htmlCssCounter += 10;
        } else if (goal === 'b') {
            swiftCounter += 15;
        } else if (goal === 'c') {
            javaCounter += 8;
            htmlCssCounter += 8;
        } else if (goal === 'd') {
            pythonCounter += 10;
            javascriptCounter += 10;
        } else if (goal === 'e') {
            rubyCounter += 12;
        } else if (goal === 'f') {
            pythonCounter += 8;
            javascriptCounter += 8;
            htmlCssCounter += 8;
        }

        if (type === 'g') {
            csharpCounter += 12;
        } else if (type === 'h') {
            csharpCounter += 6;
        } else if (type === 'i') {
            // No strong preference aka 0 points
        } else if (type === 'j') {
            javascriptCounter += 6;
            rubyCounter += 6;
        } else if (type === 'k') {
            swiftCounter += 12;
        }

        if (platform === 'l') {
            swiftCounter += 15;
        } else if (platform === 'm') {
            javascriptCounter += 15;
        } else if (platform === 'n') {
            pythonCounter += 10;
            javascriptCounter += 10;
            htmlCssCounter += 10;
        } else if (platform === 'o') {
            csharpCounter += 15;
        } else if (platform === 'p') {
            javaCounter += 10;
            rubyCounter += 10;
        }

        if (support === 'q') {
            pythonCounter += 12;
            javascriptCounter += 12;
        } else if (support === 'r') {
            csharpCounter += 10;
            htmlCssCounter += 10;
        } else if (support === 's') {
            javaCounter += 8;
            rubyCounter += 8;
        } else if (support === 't') {
            swiftCounter += 6;
        }

        if (readability === 'u') {
            pythonCounter += 12;
            htmlCssCounter += 12;
        } else if (readability === 'v') {
            javascriptCounter += 8;
            rubyCounter += 8;
        } else if (readability === 'w') {
            csharpCounter += 5;
        }

        const recommendedLanguages = getRecommendedLanguages();

        displayRecommendations(recommendedLanguages);
    });
});

function getRecommendedLanguages() {
    const languageCounters = [
        { language: 'Python', counter: pythonCounter },
        { language: 'JavaScript', counter: javascriptCounter },
        { language: 'Java', counter: javaCounter },
        { language: 'C#', counter: csharpCounter },
        { language: 'Ruby', counter: rubyCounter },
        { language: 'Swift', counter: swiftCounter },
        { language: 'HTML/CSS', counter: htmlCssCounter }
    ];

    const maxCounter = Math.max(...languageCounters.map(language => language.counter));

    const recommendedLanguages = languageCounters.filter(language => language.counter === maxCounter).map(language => language.language);

    return recommendedLanguages;
}

function displayRecommendations(recommendedLanguages) {
    const resultDiv = document.getElementById('result');

    if (recommendedLanguages.length > 0) {
        resultDiv.innerHTML = `Based on your selections, we recommend the following language: ${recommendedLanguages}`;
    } else {
        resultDiv.innerHTML = 'No Suitable languages found';
    }
}
