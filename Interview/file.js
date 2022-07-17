var quest = ['Pourriez-vous me parler de vous et décrire brièvement votre parcours ?',
    'Comment avez-vous entendu parler de ce poste ?',
    "Quel type d'environnement de travail préférez-vous ?",
    'Comment gérez-vous la pression ou les situations stressantes ?',
    'Préférez-vous travailler de manière indépendante ou en équipe ?',
    ' Lorsque vous gérez plusieurs projets, comment restez-vous organisé ?',
    "Qu'avez-vous fait l'année dernière pour améliorer vos connaissances ?",
    ' Quelles sont vos attentes salariales ?',
    "Postulez-vous pour d'autres emplois ?",
    "D'après votre CV, il semble que vous ayez pris une année sabbatique. Voudriez-vous nous dire pourquoi ?"
];

var questE = ['Could you tell me about yourself and briefly describe your background?',
    'How did you hear about this job?',
    "What type of work environment do you prefer?",
    'How do you handle pressure or stressful situations?',
    'Do you prefer to work independently or in a team?',
    'When managing multiple projects, how do you stay organized?',
    "What have you done in the last year to improve your knowledge?",
    'What are your salary expectations?',
    "Are you applying for other jobs?",
    "From your resume, it looks like you took a year off. Would you tell us why?"
];

var astuce_0 = ['Parler de votre parcours academique en relation avec le poste', 'parler en bref de vos competences et ce que vous aimer en relation avec le poste', 'parler des vos valeurs', 'parler de vos hobbies'];
var astuce_1 = ["Parler de la plateforme", "Dites comment vous avez lu l'annonce et trouvé que votre profil est compatible"];
var astuce_2 = ["Parler de l'environement de travail idéal", "mentioner que generalement l'envrionement classique du l'offre 'x' est compatible avec ce que vous rechercher si c'est le cas , sinon citer les points que vous trouver positifs"];
var astuce_3 = ["Parler de votre approche face aux situations difficiles", "renforcer vos arguments avec des experiences réels", "mentioner vos soft-skills d'une maniére intelligente"];
var astuce_4 = ["Votre reponse ici doit tendre vers le millieu, pour montrer que vous savez travailler seul, ou en équipe quand il le faut", "votre preference doit étre mentionné d'une maniére 'discréte'"];
var astuce_5 = ["Parler de votre approche face à cette situation", "renforcer vos arguments par des exemples", "mentioner vos soft-skills d'une maniére intelligente"];
var astuce_6 = ["Parler de vos exploits,cetifications,projets", "mentionner vos soft-skills d'une maniére intelligente(le faite que vous travailler dur par exemple)"];
var astuce_7 = ["Vous devez avoir une idée sur l'intervalle salariales de votre poste à votre niveau", "Commencer par proposer un salaire haut , car c'est plus facille de négocier comme ca"];
var astuce_8 = ["Réponder d'une maniére honnete et renforcer votre réponse par vos raisons,de nature financiére,personelle etc , mais eviter de mentioner les raisons qui peuvent vous rabaisser(problemes mentales par exemples)"];
var astuce_9 = ["Expliquer pourquoi sans toucher negativement a votre image", "parler de vos aqcuis pendant cette periode"];

var astuce_0E = ['Talk about your academic background connecter to the position', 'talk briefly about your skills and what you like connected to the position', 'talk about your values', 'talk about your hobbies'];
var astuce_1E = ["Talk about the platform", "Talk with them about how you saw the offer and found that your profile is compatible"];
var astuce_2E = ["Talk about the ideal work environment for you", "mention that generally the classic environment of the 'x' offer is compatible with what you are looking for if this is the case, otherwise mention the points you find positive"];
var astuce_3E = ["Talk about your approach to difficult situations", "reinforce your arguments with real experiences", "mention your soft-skills in an intelligent way"];
var astuce_4E = ["Your answer here should tend towards the middle, to show that you know how to work alone, or in a team when necessary", "your preference should be mentioned in a 'discreet' way"];
var astuce_5E = ["Talk about your approach to this situation", "reinforce your arguments with examples", "mention your soft-skills in an intelligent way"];
let astuce_6E = ["Talk about your achievements, certifications, projects", "mention your soft-skills in an intelligent way (the fact that you work hard for example)"];
var astuce_7E = ["You must have an idea of ​​the salary range of your position at your level", "Start by offering a high salary, because it's easier to negotiate like that"];
var astuce_8E = ["Answer honestly and reinforce your answer with your reasons, financial, personal, etc., but avoid mentioning reasons that can put you down (mental problems for example)"];
var astuce_9E = ["Explain why without negatively affecting your image", "talk about your achievements/what you aqcuired during this period"];


function question() {
    rand = Math.floor(Math.random() * 10);
    if (fr == true) {
        document.getElementById('question').innerHTML = quest[rand];
    } else if (fr == false) { document.getElementById('question').innerHTML = questE[rand]; }
    if (fr == true) {
        document.getElementById('tmp2').innerHTML = "Clicker sur astuces pour l'aide";
    } else if (fr == false) {
        document.getElementById('tmp2').innerHTML = "Click on Help to get help";
    }

}

function astuces() {
    if (fr == true) {
        if (rand == 0) { document.getElementById('tmp2').innerHTML = astuce_0; } else if (rand == 1) { document.getElementById('tmp2').innerHTML = astuce_1; } else if (rand == 2) { document.getElementById('tmp2').innerHTML = astuce_2; } else if (rand == 3) { document.getElementById('tmp2').innerHTML = astuce_3; } else if (rand == 4) { document.getElementById('tmp2').innerHTML = astuce_4; } else if (rand == 5) { document.getElementById('tmp2').innerHTML = astuce_5; } else if (rand == 6) { document.getElementById('tmp2').innerHTML = astuce_6; } else if (rand == 7) { document.getElementById('tmp2').innerHTML = astuce_7; } else if (rand == 8) { document.getElementById('tmp2').innerHTML = astuce_8; } else if (rand == 9) { document.getElementById('tmp2').innerHTML = astuce_9; }
    } else if (fr == false) {
        if (rand == 0) {
            document.getElementById('tmp2').innerHTML = astuce_0E;
        } else if (rand == 1) { document.getElementById('tmp2').innerHTML = astuce_1E; } else if (rand == 2) { document.getElementById('tmp2').innerHTML = astuce_2E; } else if (rand == 3) { document.getElementById('tmp2').innerHTML = astuce_3E; } else if (rand == 4) { document.getElementById('tmp2').innerHTML = astuce_4E; } else if (rand == 5) { document.getElementById('tmp2').innerHTML = astuce_5E; } else if (rand == 6) { document.getElementById('tmp2').innerHTML = astuce_6E; } else if (rand == 7) { document.getElementById('tmp2').innerHTML = astuce_7E; } else if (rand == 8) { document.getElementById('tmp2').innerHTML = astuce_8E; } else if (rand == 9) { document.getElementById('tmp2').innerHTML = astuce_9E; }

    }
}



fr = true;
var moyenne = [];

function calculeMoyenne() {
    temp = 0;
    for (var i = 0; i < moyenne.length; i++) {
        temp = temp + Number(moyenne[i]);
    }
    temp = (temp) / (moyenne.length);
    document.getElementById('tmp3').innerHTML = temp.toFixed(1);
}

function Pusher() {
    moyenne.push(document.getElementById('moyenne').value);
    calculeMoyenne();
}


function francais() {
    fr = true;
    eng = false;
    document.getElementById('f1').innerHTML = "👨‍⚖️ Generer une question 👩‍⚖️";
    document.getElementById('question').innerHTML = 'Cliquer pour Generer une question.';
    document.getElementById('help').innerHTML = '🆘 Astuces 🆘';
    document.getElementById('tmp2').innerHTML = "Clicker sur astuces pour l'aide";
    document.getElementById('f2').innerHTML = "Notez vous sur 20 pour chaque question et recevez votre moyenne !";
    document.getElementById('f3').value = "Confirmer";
    document.getElementById('l').innerHTML.join(',') = "Comment ça fonctionne: Tout d'abord metter vous a l'aise dans un envrionement d'interview,puis quand vous vous sentez pret ,cliquer sur générer une question et répondez comme si vos etes devant un interviewer,si vous vous bloquez,n'hésitez pas à utiliserle bouton 'astuces', puis quand vous terminez votre réponse(oralement),vous pouvez vous noter / 20 selon vos propres critères et recevoir votre moyenne(astuce: Utiliser votre téléphone pour enregister votre interview), Bon Interview à vous!";
}


function english() {
    fr = false;
    eng = true;
    document.getElementById('f1').innerHTML = "👨‍⚖️ Generate a question 👩‍⚖️";
    document.getElementById('question').innerHTML = 'Click to Generate a question';
    document.getElementById('help').innerHTML = '🆘 Help 🆘';
    document.getElementById('tmp2').innerHTML = "Click on Help to get help";
    document.getElementById('f2').innerHTML = "Grade yourself /20 and get your average mark";
    document.getElementById('f3').value = "Confirm";
    document.getElementById('l').innerHTML.join(',') = "How it works: First, get comfortable in an interview environment, then when you feel ready, click on generate a question and answer as if you were in front of an interviewer, if you get stuck, don't hesitate to use the 'Help' button, then when you finish your answer (orally), you can score yourself / 20 according to your own criteria and receive your average grade (tip: Use your phone to record your interview), Have a fun Interview !"
}