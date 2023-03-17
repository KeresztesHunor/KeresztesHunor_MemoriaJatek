const HATTER = "kepek/hatter.jpg";

const KEPEK = [
    {
        kep: "kep1.jpg",
        alt: "Kep 1",
    },
    {
        kep: "kep2.jpg",
        alt: "Kep 2",
    },
    {
        kep: "kep3.jpg",
        alt: "Kep 3",
    },
    {
        kep: "kep4.jpg",
        alt: "Kep 4",
    },
    {
        kep: "kep5.jpg",
        alt: "Kep 5",
    },
    {
        kep: "kep6.jpg",
        alt: "Kep 6",
    },
    {
        kep: "kep1.jpg",
        alt: "Kep 1",
    },
    {
        kep: "kep2.jpg",
        alt: "Kep 2",
    },
    {
        kep: "kep3.jpg",
        alt: "Kep 3",
    },
    {
        kep: "kep4.jpg",
        alt: "Kep 4",
    },
    {
        kep: "kep5.jpg",
        alt: "Kep 5",
    },
    {
        kep: "kep6.jpg",
        alt: "Kep 6",
    }
];

const KIVALASZTOTT_KEPEK = [];

$(() =>
{
    const FELSO = $("#felso");
    FELSO.append(osszeallit());
    const FELSO_KEPEK = $("#felso > div > img");
    FELSO_KEPEK.on("click", event =>
    {
        event.target.src = `kepek/${KEPEK[event.target.id].kep}`;
        KIVALASZTOTT_KEPEK.push(event.target.id);
        if (KIVALASZTOTT_KEPEK.length === 2)
        {
            visszafordit();
        }
    });
});

function visszafordit()
{
    setTimeout(() =>
    {
        const FELSO_KEPEK = $("#felso > div > img");
        KIVALASZTOTT_KEPEK.forEach(index => FELSO_KEPEK[index].src = HATTER);
        KIVALASZTOTT_KEPEK.splice(0, KIVALASZTOTT_KEPEK.length);
    }, 1000);
}

function osszeallit()
{
    let txt = "";
    KEPEK.forEach((kep, index) =>
    {
        txt += ujTagekKozeIr("div", null, kepetIr(HATTER, kep.alt, `id="${index}"`));
    });
    return txt;
}

function kepetIr(kep, alt, parameterek = null)
{
    return `<img src="${kep}" alt="${alt}"${parameterezes(parameterek)}>`;
}

function ujTagekKozeIr(tag, parameterek = null, tartalom = "")
{
    return `<${tag}${parameterezes(parameterek)}>${tartalom}</${tag}>`;
}

function parameterezes(parameterek)
{
    return parameterek ? " " + parameterek : "";
}