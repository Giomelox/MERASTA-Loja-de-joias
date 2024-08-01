function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    var dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

document.addEventListener('click', function(event) {
    var isClickInsideDropdown = event.target.closest('.dropdown');
    if (!isClickInsideDropdown) {
        var dropdowns = document.querySelectorAll('.dropdowncontent');
        dropdowns.forEach(function(dropdown) {
            dropdown.style.display = 'none';
        });
    }
});

//====================================================================================//

function toggleDropdown(event, dropdown1Id) {
    event.preventDefault();
    var dropdown1 = document.getElementById(dropdown1Id);
    if (dropdown1.style.display === "block") {
        dropdown1.style.display = "none";
    } else {
        dropdown1.style.display = "block";
    }
}

document.addEventListener('click', function(event) {
    var isClickInsideDropdown1 = event.target.closest('.dropdown1');
    if (!isClickInsideDropdown1) {
        var dropdowns1 = document.querySelectorAll('.dropdowncontent1');
        dropdowns1.forEach(function(dropdown1) {
            dropdown1.style.display = 'none';
        });
    }
});

//====================================================================================//

function toggleDropdown(event, dropdown2Id) {
    event.preventDefault();
    var dropdown2 = document.getElementById(dropdown2Id);
    if (dropdown2.style.display === "block") {
        dropdown2.style.display = "none";
    } else {
        dropdown2.style.display = "block";
    }
}

document.addEventListener('click', function(event) {
    var isClickInsideDropdown2 = event.target.closest('.dropdown2');
    if (!isClickInsideDropdown2) {
        var dropdowns2 = document.querySelectorAll('.dropdowncontent2');
        dropdowns2.forEach(function(dropdown2) {
            dropdown2.style.display = 'none';
        });
    }
});

//====================================================================================//

function toggleDropdown(event, dropdown3Id) {
    event.preventDefault();
    var dropdown3 = document.getElementById(dropdown3Id);
    if (dropdown3.style.display === "block") {
        dropdown3.style.display = "none";
    } else {
        dropdown3.style.display = "block";
    }
}

document.addEventListener('click', function(event) {
    var isClickInsideDropdown3 = event.target.closest('.dropdown3');
    if (!isClickInsideDropdown3) {
        var dropdowns3 = document.querySelectorAll('.dropdowncontent3');
        dropdowns3.forEach(function(dropdown3) {
            dropdown3.style.display = 'none';
        });
    }
});

//====================================================================================//

function toggleDropdown(event, dropdown4Id) {
    event.preventDefault();
    var dropdown4 = document.getElementById(dropdown4Id);
    if (dropdown4.style.display === "block") {
        dropdown4.style.display = "none";
    } else {
        dropdown4.style.display = "block";
    }
}

document.addEventListener('click', function(event) {
    var isClickInsideDropdown4 = event.target.closest('.dropdown4');
    if (!isClickInsideDropdown4) {
        var dropdowns4 = document.querySelectorAll('.dropdowncontent4');
        dropdowns4.forEach(function(dropdown4) {
            dropdown4.style.display = 'none';
        });
    }
});

//====================================================================================//

function toggleDropdown(event, dropdown5Id) {
    event.preventDefault();
    var dropdown5 = document.getElementById(dropdown5Id);
    if (dropdown5.style.display === "block") {
        dropdown5.style.display = "none";
    } else {
        dropdown5.style.display = "block";
    }
}

document.addEventListener('click', function(event) {
    var isClickInsideDropdown5 = event.target.closest('.dropdown5');
    if (!isClickInsideDropdown5) {
        var dropdowns5 = document.querySelectorAll('.dropdowncontent5');
        dropdowns5.forEach(function(dropdown5) {
            dropdown5.style.display = 'none';
        });
    }
});

//====================================================================================//

window.addEventListener('scroll', function() {
    var fixedElement = document.getElementById('fixedElement');
    var maxYPosition = 5350; 
    var currentYPosition = window.scrollY + 20; 
    if (currentYPosition > maxYPosition) {
        fixedElement.style.top = maxYPosition - window.scrollY + 'px';
    } else {
        fixedElement.style.top = '250px';
    }
});

//====================================================================================//

window.addEventListener('scroll', function() {
    var fixedElement = document.getElementById('fixedElement1');
    var maxYPosition = 5450; 
    var currentYPosition = window.scrollY + 20; 
    if (currentYPosition > maxYPosition) {
        fixedElement.style.top = maxYPosition - window.scrollY + 'px';
    } else {
        fixedElement.style.top = '350px';
    }
});