const { name } = require("ejs")

function changeWeb() {
    let displayimage = document.getElementById('image')
    if (displayimage.src.match('https://i.ibb.co/zftD2vk/logo.png')) {
        displayimage.src = 'download (1).jpg'

        let tilte = document.getElementById("title")
        tilte.textContent = "We're the Cat People"
        tilte.style.textAlign = "center"
        tilte.style.color = "#7393B3"



        let progr = document.getElementById("prograch")
        progr.textContent = "Any place where cats are present brings comfort and reassurance."
        progr.style.color = 'black'
        progr.style.textAlign = "center"
        progr.style.fontSize = '30px'

        let titles = document.getElementById("Textcat");
        titles.textContent = "THE LATEST CAT NEWS, EXPERT ADVICE, AND MORE!"
        titles.style.color = "#7393B3"
        tilte.style.fontSize = '20px '

        //rover-hero-container 


        let imges = document.getElementsByClassName('rover-hero-container')[0]
        imges.style.backgroundImage = "url('https://cats.com/wp-content/themes/ribosome/img/home/cat-laptop.png')"
        imges.style.backgroundRepeat = "no-repeat"

        let imge = document.getElementsByClassName('rover-action-shot ')[0]
        imge.style.backgroundImage = "url('data:image/jpeg;base64,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')"

        let foot = document.getElementById("text");
        foot.textContent = "Join the Cat-Loving Community!";
        console.log(foot)
        foot.style.fontSize = '30px ';

        let webing = document.getElementById("webi")
        webing.textContent = "Cats.com"
        webing.style.color = 'black';
        webing.style.fontFamily = 'Fantasy'

        let imgesa = document.getElementById('imgweb')
        imgesa.src = 'web.png'

        let changelin = document.getElementById("links")
        changelin.textContent = "cat@gmail.com"

        let About = document.getElementById("about")
        About.textContent = 'About us!'

        let abouima = document.getElementById('imgeabout')
        abouima.src = 'about.png'


        let Aboutw = document.getElementById("abouttt")
        Aboutw.textContent = "Welcome to Cat Haven!"

        let Caa = document.getElementById('realx')
        Caa.src = 're.jpg'



        let nn = document.getElementById('pp')
        nn.textContent = 'This Sassy Paralyzed Cat Travels With Her Human for Work and It’s a Delight'
        nn.style.color = '#7393B3'

        let tt = document.getElementById('pro')
        tt.textContent = 'We’re The Cat People'
        tt.style.color = '#7393B3'


        let harts = document.getElementById('cont')
        harts.src = 'hart.png'


        let btnu = document.getElementById('btn')
        btnu.textContent = 'Book Now!'
        btnu.style.color = '#ffff'
        btnu.style.backgroundColor = '#6082B6'


        let ll1 = document.getElementById('li1')
        ll1.textContent = 'All new cat caretakers undergo a thorough vetting process. Each caretaker provides an extensive profile and personal details. Every caretaker is endorsed by our dedicated team of cat care specialists'
        ll1.style.color = '#6082B6'


        let ll2 = document.getElementById('li2')
        ll2.textContent = 'All new cat sitters undergo a comprehensive background check'
        ll2.style.color = '	#6082B6    '


        let ll3 = document.getElementById('li3')
        ll3.textContent = 'We ensure that each sitter has a safe and welcoming environment for your cat '
        ll3.style.color = '	#6082B6    '
    } //cati
    let ll4 = document.getElementById('cati')
    ll4.textContent = 'Cat Boarding '
    ll4.style.color = '	#6082B6    '

    let ll5 = document.getElementById('catg')
    ll5.textContent = 'House Sitting! '
    ll5.style.color = '	#6082B6    '

    let ll6 = document.getElementById('catv')
    ll6.textContent = 'Cat Walking'
    ll6.style.color = '	#6082B6    '


    let ll7 = document.getElementById('catn')
    ll7.textContent = 'Cat Day Care'
    ll7.style.color = '	#6082B6    '

    let ll8 = document.getElementById('cate')
    ll8.textContent = 'Drop-In Vistis '
    ll8.style.color = '	#6082B6    '
}