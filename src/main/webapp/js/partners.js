
var countries = [
    { code: 'dk', name: 'Denmark' },
    { code: 'ee', name: 'Estonia' },
    { code: 'fi', name: 'Finland' },
    { code: 'pl', name: 'Poland' },
    { code: 'se', name: 'Sweden' },
    { code: 'lv', name: 'Latvia' },
    { code: 'de', name: 'Germany' },
    { code: 'fr', name: 'France' },
    { code: 'au', name: 'Austria' },
    { code: 'mt', name: 'Malta' },
    { code: 'no', name: 'Norway' },
    { code: 'gb', name: 'UK' },
    { code: 'org', name: 'Organizations' }
];

var partners = [
    { name: 'Danish Maritime Authority', logo: '/img/partners/dma.png', country: 'dk', www: 'http://dma.dk' },
    { name: 'Danish Geodata Agency', logo: '/img/partners/dga.png', country: 'dk', www: 'http://gst.dk' },
    { name: 'Danish Meteorological Institute', logo: '/img/partners/dmi.png', country: 'dk', www: 'http://dmi.dk' },
    { name: 'Estonian Maritime Administration', logo: '/img/partners/ema.png', country: 'ee', www: 'http://www.vta.ee' },
    { name: 'Finnish Transport Agency', logo: '/img/partners/fta.png', country: 'fi', www: 'http://www.fta.fi' },
    { name: 'Maritime Office of Gdynia', logo: '/img/partners/mog.png', country: 'pl', www: 'http://www.umgdy.gov.pl' },
    { name: 'National Institute of Telecommunications', logo: '/img/partners/nit.png', country: 'pl', www: 'http://www.nit.eu' },
    { name: 'Swedish Maritime Administration', logo: '/img/partners/sma.png', country: 'se', www: 'http://sjofartsverket.se' },
    { name: 'Chalmers University of Technology', logo: '/img/partners/chalmers.png', country: 'se', www: 'http://www.chalmers.se' },
    { name: 'DIKU', logo: '/img/partners/diku.png', country: 'dk', www: 'http://diku.dk' },
    { name: 'DTU Space', logo: '/img/partners/dtu_space.png', country: 'dk', www: 'http://www.space.dtu.dk' },
    { name: 'Latvian Maritime Academy', logo: '/img/partners/lma.png', country: 'lv', www: 'http://www.latja.lv' },
    { name: 'OFFIS', logo: '/img/partners/offis.png', country: 'de', www: 'http://www.offis.de' },
    { name: 'BIMCO', logo: '/img/partners/bimco.png', country: 'org', www: 'http://www.bimco.org' },
    { name: 'CIRM', logo: '/img/partners/cirm.png', country: 'org', www: 'http://cirm.org' },
    { name: 'IALA', logo: '/img/partners/iala.png', country: 'org', www: 'http://www.iala-aism.org' },
    { name: 'Maritime Development Center', logo: '/img/partners/mdce.png', country: 'dk', www: 'http://www.maritimecenter.dk' },
    { name: 'SSPA', logo: '/img/partners/sspa.png', country: 'se', www: 'http://www.sspa.se' },
    { name: 'Force Technology', logo: '/img/partners/force.png', country: 'dk', www: 'http://www.forcetechnology.com' },
    { name: 'Collecte Localisation Satellites', logo: '/img/partners/cls.png', country: 'fr', www: 'http://www.cls.fr' },
    { name: 'Danelec Marine', logo: '/img/partners/danelec.png', country: 'dk', www: 'http://www.danelec-marine.com' },
    { name: 'Frequentis', logo: '/img/partners/frequentis.png', country: 'au', www: 'http://www.frequentis.com' },
    { name: 'FURUNO', logo: '/img/partners/furuno.png', country: 'fi', www: 'http://www.furuno.fi' },
    { name: 'GateHouse', logo: '/img/partners/gatehouse.png', country: 'dk', www: 'http://www.gatehouse.dk' },
    { name: 'LITEHAUZ', logo: '/img/partners/litehauz.png', country: 'dk', www: 'http://www.litehauz.com' },
    { name: 'Lyngsø Marine', logo: '/img/partners/lyngsoe.png', country: 'dk', www: 'http://lyngsoe.com' },
    { name: 'MARSEC-XL', logo: '/img/partners/marsec.png', country: 'mt', www: 'http://www.marsec-xl.org' },
    { name: 'Rocketbrothers', logo: '/img/partners/rocket.png', country: 'dk', www: 'http://www.rocketbrothers.dk' },
    { name: 'Thrane & Thrane', logo: '/img/partners/thrane.png', country: 'dk', www: 'http://www.cobham.com' },
    { name: 'Transas Marine', logo: '/img/partners/transas.png', country: 'se', www: 'http://transas.se' },
    { name: 'Vissim', logo: '/img/partners/vissim.png', country: 'no', www: 'http://vissim.no' },
    { name: 'UKHO', logo: '/img/partners/ukho.png', country: 'gb', www: 'http://www.ukho.gov.uk' }
];

