async function GenerateRandomCV()
{
    await GetRandomProfile();   
    GetSetRandomLanguage();
    GetSetRandomHobbies();    
    GetSetVideo();
}

async function GetRandomProfile () 
{
    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);
    const { results } = await response.json();
    const data = results[0];    
    const picture = document.querySelector('#picture');
    const completeName = document.querySelector('#completeName');    
    GetSetRandomOccupation();  
    const phone = document.querySelector('#phone');
    const email = document.querySelector('#email');
    const earth = document.querySelector('#earth');
    const ltn = document.querySelector('#ltn');

    picture.src = data.picture.large;
    completeName.textContent = data.name.title + " " + data.name.first + "\n" + data.name.last;    
    phone.textContent = data.phone;
    email.textContent = data.email;
    earth.textContent = data.location.state;
    ltn.textContent = data.location.street.name + " " + data.location.street.number;
}

function GetSetRandomOccupation() 
{
    const job = document.querySelector('#job');

    const jobs = ["Carpintero/a", "Fontanero/a", "Operador de atención al cliente", "Creador/a de contenido digital", "Pintor/a", "Auxiliar contable", "Cerrajero/a", "Operario/a de logística",
                "Panadero/a", "Mecánico/a", "Peluquero/a", "Peluquero/a de mascotas", "Carnicero/a", "Joyero/a", "Zapatero/a", "Soldador/a", "Auxiliar administrativo", "Relojero/a", "Lutier",
                "Conductor/a", "Camarero/a", "Albañil", "Herrero", "Tatuador/a", "Maquillador/a", "Gestor/a comercial", "Transportista", "Sastre", "Cocinero/a", "Electricista"];

    const shuffledJobs = GetShuffledArray(jobs);            

    job.textContent = shuffledJobs[0];     
}

function GetSetRandomLanguage()
{
    const language1 = document.querySelector('#language1');
    const language2 = document.querySelector('#language2');
    const language3 = document.querySelector('#language3');
    const language4 = document.querySelector('#language4');
    const languages = ["Inglés", "Francés", "Portugués", "Español", "Alemán", "Ruso", "Mandarín", "Hindi", "Árabe", "Bengalí", "Indonesio", "Urdu", "Japonés", "Marathi", "Turco"];
    const percents = ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"];

    const shuffledLanguages = GetShuffledArray(languages);
    const shuffledPercents = GetShuffledArray(percents);

    language1.textContent = shuffledLanguages[0];
    language2.textContent = shuffledLanguages[1];
    language3.textContent = shuffledLanguages[2];
    language4.textContent = shuffledLanguages[3];

    document.getElementById("percent1").style.width = shuffledPercents[0];
    document.getElementById("percent2").style.width = shuffledPercents[1];
    document.getElementById("percent3").style.width = shuffledPercents[2];
    document.getElementById("percent4").style.width = shuffledPercents[3];
}

function GetSetRandomHobbies()
{
    const hobbie1 = document.querySelector('#hobbie1');
    const hobbie2 = document.querySelector('#hobbie2');
    const hobbie3 = document.querySelector('#hobbie3');
    const hobbie4 = document.querySelector('#hobbie4');

    const hobbies = ["Videojuegos", "Música", "Fútbol", "Cocinar", "Jardinería", "Acuariofilia", "Filatelia", "Numismática", "Modelismo", "Juegos de mesa", 
                      "Bricolaje", "Militaria", "Audiofilia", "Origami", "Cinefilia", "Radioafición", "Cosplay", "Baile", "Cocina", "Fotografía"];
    
    const shuffledHobbies = GetShuffledArray(hobbies);

    hobbie1.textContent = shuffledHobbies[0];
    hobbie2.textContent = shuffledHobbies[1];
    hobbie3.textContent = shuffledHobbies[2];
    hobbie4.textContent = shuffledHobbies[3];
}

function GetSetVideo() 
{
    document.getElementById("myFrame").src = "http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com";
}

function GetShuffledArray(array)
{
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

function InvokePopup() 
{
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', GenerateRandomCV());