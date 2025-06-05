document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const box = document.getElementById("box-search");

if (openBtn && closeBtn && box) {
    openBtn.addEventListener("click", () => {
    box.classList.add("show");
});
closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    box.classList.remove("show");
});
box.addEventListener("click", (e) => {
    if (e.target === box) {
        box.classList.remove("show");
}
});
} else {
    console.error("Elements not found!");
}

const profile = document.getElementById('show-prof');

profile.addEventListener('click', function(e) {
    e.stopPropagation();
    const afterDiv = this.querySelector('.after');
    afterDiv.classList.toggle('show');
});

document.addEventListener('click', function(e) {
    if (!profile.contains(e.target)) {
        const afterDiv = profile.querySelector('.after');
        afterDiv.classList.remove('show');
    }
});

    const openBtn_mobile = document.getElementById("openBtn-mobile");
    const closeBtn_mobile = document.getElementById("closeBtn-mobile");
    const box_searchmobile = document.getElementById("box-searchmobile");

if (openBtn_mobile && closeBtn_mobile && box_searchmobile) {
    openBtn_mobile.addEventListener("click", () => {
    box_searchmobile.classList.add("show");
});
closeBtn_mobile.addEventListener("click", (e) => {
    e.stopPropagation();
    box_searchmobile.classList.remove("show");
});
box_searchmobile.addEventListener("click", (e) => {
    if (e.target === box_searchmobile) {
        box_searchmobile.classList.remove("show");
}
});
} else {
    console.error("Elements not found!");
}


    const header_button_box = document.getElementById("header-button-box");
    const header_box_search = document.getElementById("header-box-search");
    const header_button_close = document.getElementById("header-button-close");

if (header_button_box && header_box_search && header_button_close) {
    header_button_box.addEventListener("click", () => {
    header_box_search.classList.add("show");
});
header_button_close.addEventListener("click", (e) => {
    e.stopPropagation();
    header_box_search.classList.remove("show");
});
header_box_search.addEventListener("click", (e) => {
    if (e.target === header_box_search) {
        header_box_search.classList.remove("show");
}
});
} else {
    console.error("Elements not found!");
}

    const open_box = document.getElementById("open-box");
    const menu_box = document.getElementById("menu-box");
    const close_box = document.getElementById("close-box");

if (open_box && menu_box && close_box) {
    open_box.addEventListener("click", () => {
    menu_box.classList.add("show");
});
close_box.addEventListener("click", (e) => {
    e.stopPropagation();
    menu_box.classList.remove("show");
});
menu_box.addEventListener("click", (e) => {
    if (e.target === menu_box) {
        menu_box.classList.remove("show");
}
});
} else {
    console.error("Elements not found!");
}




    const open_text_support = document.getElementById("button-support");
    const text_support = document.getElementById("text-support");

if (open_text_support && text_support) {
    open_text_support.addEventListener("click", () => {
    text_support.classList.toggle("show");
    open_text_support.classList.toggle("active");
});
text_support.addEventListener("click", (e) => {
    if (e.target === text_support) {
        text_support.classList.remove("show");
        open_text_support.classList.remove("active");
}
});
} else {
    console.error("Elements not found!");
}

    const open_text_about = document.getElementById("button-about");
    const text_about = document.getElementById("text-about");

if (open_text_about && text_about) {
    open_text_about.addEventListener("click", () => {
    text_about.classList.toggle("show");
    open_text_about.classList.toggle("active");
});
text_about.addEventListener("click", (e) => {
    if (e.target === text_about) {
        text_about.classList.remove("show");
        open_text_about.classList.remove("active");
}
});
} else {
    console.error("Elements not found!");
}

    const open_text_stay = document.getElementById("button-stay");
    const text_stay = document.getElementById("text-stay");

if (open_text_stay && text_stay) {
    open_text_stay.addEventListener("click", () => {
    text_stay.classList.toggle("show");
    open_text_stay.classList.toggle("active");
});
text_stay.addEventListener("click", (e) => {
    if (e.target === text_stay) {
        text_stay.classList.remove("show");
        open_text_stay.classList.remove("active");
}
});
} else {
    console.error("Elements not found!");
}


        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab').forEach(t => {
                    t.classList.remove('active');
                });
                tab.classList.add('active');
                
                const tabName = tab.getAttribute('data-tab');
                document.getElementById('loginForm').style.display = 
                    tabName === 'login' ? 'block' : 'none';
                document.getElementById('registerForm').style.display = 
                    tabName === 'register' ? 'block' : 'none';
            });
        });


                document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab').forEach(t => {
                    t.classList.remove('active');
                });
                
                tab.classList.add('active');
                const tabName = tab.getAttribute('data-tab');
                document.getElementById('loginForm-mobile').style.display = 
                    tabName === 'login-mobile' ? 'block' : 'none';
                document.getElementById('registerForm-mobile').style.display = 
                    tabName === 'register-mobile' ? 'block' : 'none';
            });
        });



document.querySelectorAll('.toggle-password').forEach(icon => {
  icon.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    const passwordInput = document.getElementById(targetId);
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.classList.add('showing');
    } else {
      passwordInput.type = 'password';
      this.classList.remove('showing');
    }
  });
});
document.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
})
document.addEventListener('keydown', (e)=>{
    if(e.key === 'F12' || e.code === 'F12'){
        e.preventDefault();
    }
})

});