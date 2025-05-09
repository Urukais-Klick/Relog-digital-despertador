const availableSounds = {
    werewolf: {
        title: "Motionless In White - Werewolf   Felices sueños  🐸",
        file: "/videos/Motionless In White - Werewolf [Official Video].webm",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FsmU4UX_UYGE%2Fmaxresdefault.jpg%3Fsqp%3D-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDYgUShyMA8%3D%26amp%3Brs%3DAOn4CLAOYAMijx4kIt33eDQwSFgUOwtVkg&f=1&nofb=1&ipt=fd0518d0596927353e658b66c5c6d34a40d564143603af4ac0835d0b5f4a3a76&ipo=images"
    },
    headless: {
        title: "Black Sabbath – Headless Cross  Felices sueños  🐸",
        file: "/videos/Black Sabbath – Headless Cross (Official HD Video).mp4",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.cwB1Uxo405hiUul71X19qgHaEK%26pid%3DApi&f=1&ipt=6ab8f187097db7c8996c9056d64b9d42066eea5580868e14d5f3be9f0381ba18&ipo=images"
    },
    cyberpunk: {
        title: "Cyberpunk POLICE 2250   Felices sueños  🐸",
        file: "/videos/Cyberpunk POLICE 2250   AI Multiverse Short Film.mp4",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ubFYQkpHsfwzU3dUKsuzLAHaEK%26pid%3DApi&f=1&ipt=d6014f79114bea3435162a7a993fb71ebc6c6c1ab67bb0dab5cc0300cf985891&ipo=images"
    },
    disturbed: {
        title: "Disturbed - Down With The Sickness   Felices sueños  🐸",
        file: "/videos/Disturbed - Down With The Sickness (Violet Orlandi ft Ai Mori COVER).mp4",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.my31sQxptSNUVMZe1xcSSwHaEK%26pid%3DApi&f=1&ipt=c9bcdbf93ceb8cc1b46569bbda9ac129dc15d985c40899facfbb5444ef13c3a4&ipo=images"
    },
    metalwings: {
        title: "METALWINGS - Crying of the Sun   Felices sueños  🐸",
        file: "/videos/METALWINGS - Crying of the Sun [OFFICIAL VIDEO].mp4",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HAfsBCCgzHdd2wvtHPBTDAHaFj%26pid%3DApi&f=1&ipt=48d738fe2110b92ac94020f0302273cc6043170cd75ebc9f35abc93fa88558dd&ipo=images"
    },
    meltdown: {
        title: "Motionless In White - Meltdown   Felices sueños  🐸",
        file: "/videos/Motionless In White - Meltdown [Official Audio + Lyrics].mp4",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jizP96Z3ohndZ5_X-Tj_dAHaEK%26pid%3DApi&f=1&ipt=34b2073c10bc1ff46d07bcee865cf3d53cc1c0286652ed7143a7f8896b561c91&ipo=images"
    },
    titans: {
        title: "March of Titans - Epic Rock Music   Felices sueños  🐸",
        file: "/videos/March of Titans - Epic Rock Music   AI Short Animated Cinematic.mp4",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.XvdNBivKwQhqrphvRNsbLwHaEK%26pid%3DApi&f=1&ipt=34bbc7e1611fae97041b41dd2960be77c0681f134e92470acf1281a47860e2b6&ipo=images"
    },
    skyfall: {
        title: "SKYFALL - Electric Ladies   Felices sueños  🐸",
        file: "/videos/SKYFALL - Electric Ladies.mp4",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bZXvIsYgBSvQk5QzhL3rSAHaEK%26pid%3DApi&f=1&ipt=b56eeecf0db366b7e62f4af80e28721a9cbab4fad923f37fdec156490e762831&ipo=images"
    },
    piano: {
        title: "Beautiful Piano Music   Felices sueños  🐸",
        file: "/videos/Beautiful Piano Music, Vol. 1   Relaxing Music for Focus, Sleep & Relaxation by Peder B. Helland.mp4",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oFO_4PaXxNZIg8GOovs5BgHaGv%26pid%3DApi&f=1&ipt=938b97d03c5cb99d1f9fca788f1441c2df9b73b0c2c30ff1f6b74844332fcd27&ipo=images"
    },
    rammstein: {
        title: "RAMMSTEIN ROSA PASTEL   PARODIA   Felices sueños  🐸",
        file: "/videos/RAMMSTEIN ROSA PASTEL   PARODIA.mp4",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9MYyvQg6WnzXFTp-2hgZ3QHaH1%26pid%3DApi&f=1&ipt=f557c85f7b532ce7f569bdd8e28b867c54be5c78c1a69f77dfffabfff627a7cb&ipo=images"
    }
};

// Función para cambiar el sonido de la alarma
function changeAlarmSound(soundKey) {
    if (availableSounds[soundKey]) {
        localStorage.setItem('selectedSound', soundKey);
        return true;
    }
    return false;
}

// Función para manejar errores de carga de imágenes
function handleImageError(img, fallback) {
    img.onerror = null;
    img.src = fallback;
}

// Cargar sonido guardado al iniciar
document.addEventListener('DOMContentLoaded', () => {
    const savedSound = localStorage.getItem('selectedSound') || 'werewolf';
    changeAlarmSound(savedSound);
}); 