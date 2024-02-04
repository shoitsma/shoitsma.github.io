<header>
    <h1>Sarah Hoitsma's Sleepy Hamster || ITIS 3135 Forms</h1>
        <nav>
            <a href="index.html" class="navbarspacing">Home</a>
            ୨♡୧
            <a href="introduction.html" class="navbarspacing">Introduction</a>
            ୨♡୧
            <a href="contract.html" class="navbarspacing">Contract</a>
            ୨♡୧
            <div class="dropdown">
                <button class="dropbtn"><u>Exercises</u></button>
                <div class="dropdown-content">
                    <a href="tables.html">Tables</a>
                    <a href="forms.html">Forms</a>
                </div>
            </div>
        </nav>
    <include src="./contract.html" src="./forms.html" src="./index.html" src="introduction.html" src="tables.html"></include>
</header>
<main>
</main>
<footer>
</footer>

var fs = require('fs');
var includeTag = require('includeTag');

var html = fs.readFileSync(__dirname + '/index.html').toString();

// Do it!
html = includeTag(__dirname, html);
// Remove includeTag.browser.js reference.
html = html.replace(/<script.*?includeTag.browser.js.*?<\/script>/gi, '');

fs.writeFileSync('demo/build.html', html, {flags: 'w+'});