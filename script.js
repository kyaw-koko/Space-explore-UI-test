/**
 * NAKSHATRA SKY / နက္ခတ္တ ကောင်းကင်ပြတိုက်
 * Bilingual (EN / မြန်မာ) Deep-Sky & Astronomy Explorer Engine
 * Vanilla JavaScript (ES6+) with localStorage persistence
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. BILINGUAL UI TRANSLATIONS DICTIONARY
     ========================================================================== */
  const TRANSLATIONS = {
    en: {
      brandName: 'Nakshatra',
      brandSky: 'Sky',
      brandSub: 'Deep-Sky Atlas',
      navSkyMap: 'Sky Map',
      navGallery: 'Deep-Sky Gallery',
      navNebulaeGalaxies: 'Nebulae & Galaxies',
      navConstellations: 'Constellations',
      navObservatories: 'Observatories',
      ctaLaunch: 'Launch Sky Map',
      liveDataBadge: 'Live Data',
      badgeSubtitle: 'Explore High-Res Nebulae, Galaxies & Night Sky Maps',
      heroTitle: 'Explore the Hidden Wonders of the Night Sky',
      heroTitleItalic: 'Hidden',
      heroSubtitle: 'Inspect deep-sky astrophotography, trace ancient constellations, and analyze high-resolution celestial imagery captured across visible and infrared wavelengths.',
      wavelengthVisible: 'Visible Spectrum',
      wavelengthInfrared: 'Infrared (JWST)',
      wavelengthNebula: 'Deep Nebula',
      ctaExplore: 'Explore Sky Atlas',
      ctaViewNebula: 'View Nebula Gallery',
      partnerTitle: 'Open-Sky Astrophotography & Mission Archives Telemetry',
      obs1Title: 'NASA SkyView',
      obs1Sub: 'Virtual Observatory',
      obs2Title: 'ESA / Hubble',
      obs2Sub: 'Cycle 32 Heritage',
      obs3Title: 'JWST Archive',
      obs3Sub: 'MAST Multi-Mission',
      obs4Title: 'Sloan Digital Sky',
      obs4Sub: 'SDSS-V Spectrograph',
      obs5Title: 'IAU Star Catalog',
      obs5Sub: 'Standard Epoch J2000',
      galleryBadge: 'Curated Celestial Survey',
      galleryHeading: 'Deep-Sky Astronomical Catalog',
      galleryDesc: 'High-resolution imagery cataloged with scientific telemetry, galactic coordinates, apparent magnitudes, and observing recommendations.',
      searchPlaceholder: 'Search M42, Carina, NGC...',
      sortFeatured: 'Sort: Featured Objects',
      sortDistAsc: 'Distance: Nearest First',
      sortDistDesc: 'Distance: Furthest First',
      sortMagAsc: 'Brightness: Brightest First',
      filterAll: 'All Objects',
      filterNebulae: 'Nebulae',
      filterGalaxies: 'Galaxies',
      filterClusters: 'Star Clusters',
      emptyTitle: 'No celestial targets match this query',
      emptyDesc: 'Try adjusting your search terms or reset filters to display the full astronomical catalog.',
      btnResetFilters: 'Reset Filters',
      btnTelemetry: 'Telemetry',
      cardDistance: 'Distance',
      constellationsBadge: 'Ancient Sky Maps & Nakshatras',
      constellationsHeading: 'The Celestial Mansions',
      constellationsDesc: 'In Vedic and ancient global astronomy, the night sky is partitioned into the 27 lunar mansions (Nakshatras) and the classical 88 IAU constellations. Select any sector below to inspect its anchor stars and celestial coordinates.',
      iauDesignation: 'IAU Constellation Designation',
      iauStandard: '88 Standard Sky Sectors',
      anchorStars: 'Principal Anchor Stars',
      viewingWindow: 'Prime Celestial Window',
      deepSkyTargets: 'Deep-Sky Targets Enclosed',
      modalSpectrumLabel: 'Multi-Spectral Filter View',
      modalSpecVisible: 'Optical RGB',
      modalSpecInfrared: 'Infrared (NIR)',
      modalSpecXray: 'High Energy',
      modalRaLabel: 'Right Ascension (RA)',
      modalDecLabel: 'Declination (Dec)',
      modalDistLabel: 'Distance',
      modalMagLabel: 'Apparent Magnitude',
      modalDimLabel: 'Apparent Dimensions',
      modalDiamLabel: 'Physical Diameter',
      modalDiscoveredLabel: 'Discovered:',
      modalObsLabel: 'Observatories:',
      modalSeasonLabel: 'Prime Viewing:',
      modalGearLabel: 'Recommended Gear:',
      btnCopyCoords: 'Copy RA/Dec',
      toastCopied: 'Coordinates copied to clipboard',
      footerTitle: 'Nakshatra Sky Atlas',
      footerSub: 'Open Astronomical Telemetry Standard',
      footerEpoch: 'J2000.0 Coordinate System · IAU 1930 Boundaries',
      objectsCountSuffix: 'Objects Listed',
      objectsCountSingular: 'Object Listed'
    },
    my: {
      brandName: 'နက္ခတ္တ',
      brandSky: 'ကောင်းကင်ပြတိုက်',
      brandSub: 'အာကာသ မြေပုံမှတ်တမ်း',
      navSkyMap: 'ကောင်းကင်မြေပုံ',
      navGallery: 'နက္ခတ်ပြခန်း',
      navNebulaeGalaxies: 'နက်ဗျူလာနှင့် ဂလက်ဆီများ',
      navConstellations: 'နက္ခတ်တာရာများ',
      navObservatories: 'လေ့လာရေးစခန်းများ',
      ctaLaunch: 'ကောင်းကင်မြေပုံဖွင့်ရန်',
      liveDataBadge: 'တိုက်ရိုက်ဒေတာ',
      badgeSubtitle: 'ကြည်လင်ပြတ်သားသော နက်ဗျူလာများ၊ ဂလက်ဆီများနှင့် ညကောင်းကင်မြေပုံများကို လေ့လာပါ',
      heroTitle: 'ညကောင်းကင်ယံ၏ လျှို့ဝှက်ဆန်းကြယ်မှုများကို လေ့လာစူးစမ်းပါ',
      heroTitleItalic: 'လျှို့ဝှက်ဆန်းကြယ်မှု',
      heroSubtitle: 'နက်ရှိုင်းသောအာကာသ ဓာတ်ပုံမှတ်တမ်းများကို ကြည့်ရှုလေ့လာပြီး၊ ရှေးဟောင်းနက္ခတ်တာရာများကို ခြေရာခံကာ သာမန်အလင်းနှင့် အနီအောက်ရောင်ခြည် လှိုင်းအလျားများဖြင့် ရိုက်ကူးထားသော အာကာသရုပ်ထွက်များကို စူးစမ်းလေ့လာပါ။',
      wavelengthVisible: 'အလင်းရောင်စဉ်',
      wavelengthInfrared: 'အနီအောက်ရောင်ခြည်',
      wavelengthNebula: 'နက်ဗျူလာမြင်ကွင်း',
      ctaExplore: 'ကောင်းကင်မြေပုံစူးစမ်းရန်',
      ctaViewNebula: 'နက်ဗျူလာပြခန်းကြည့်ရန်',
      partnerTitle: 'ပွင့်လင်းအာကာသ ဓာတ်ပုံပညာနှင့် စူးစမ်းလေ့လာရေး မစ်ရှင်များ၏ အချက်အလက်များ',
      obs1Title: 'NASA SkyView',
      obs1Sub: 'ဗာတျူရယ် နက္ခတ်မျှော်စင်',
      obs2Title: 'ဥရောပအာကာသအေဂျင်စီ / ဟာဘယ်လ်',
      obs2Sub: 'စက်ဝန်း ၃၂ အမွေအနှစ်',
      obs3Title: 'JWST Archive',
      obs3Sub: 'MAST မစ်ရှင်ပေါင်းစုံ',
      obs4Title: 'Sloan Digital Sky',
      obs4Sub: 'SDSS-V ရောင်စဉ်တိုင်းကိရိယာ',
      obs5Title: 'IAU Star Catalog',
      obs5Sub: 'စံသတ်မှတ်ချက် Epoch J2000',
      galleryBadge: 'ရွေးချယ်ထားသော အာကာသစစ်တမ်း',
      galleryHeading: 'နက္ခတ္တဗေဒ နက်ရှိုင်းသောအာကာသ မှတ်တမ်း',
      galleryDesc: 'သိပ္ပံနည်းကျ အချက်အလက်များ၊ ဂလက်ဆီဆိုင်ရာ ကိုဩဒိနိတ်များ၊ မြင်သာတောက်ပမှုနှုန်းနှင့် ကြည့်ရှုလေ့လာရန် အကြံပြုချက်များဖြင့် စုစည်းထားသော ရုပ်ထွက်မြင့် အာကာသဓာတ်ပုံများ။',
      searchPlaceholder: 'M42၊ ကာရီနာ၊ NGC စသည်ဖြင့် ရှာဖွေပါ...',
      sortFeatured: 'စနစ်တကျ ရွေးချယ်မှုအလိုက်',
      sortDistAsc: 'အကွာအဝေး- အနီးဆုံးမှစ၍',
      sortDistDesc: 'အကွာအဝေး- အဝေးဆုံးမှစ၍',
      sortMagAsc: 'တောက်ပမှု- အတောက်ပဆုံးမှစ၍',
      filterAll: 'အားလုံး',
      filterNebulae: 'နက်ဗျူလာများ',
      filterGalaxies: 'ဂလက်ဆီများ',
      filterClusters: 'ကြယ်အစုအဝေးများ',
      emptyTitle: 'ဤရှာဖွေမှုနှင့် ကိုက်ညီသော အာကာသပစ်မှတ် မရှိပါ',
      emptyDesc: 'ရှာဖွေမှုစကားလုံးများကို ပြင်ဆင်ပါ သို့မဟုတ် စစ်ထုတ်မှုများကို မူလအတိုင်း ပြန်ထားပါ။',
      btnResetFilters: 'စစ်ထုတ်မှုများ ပြန်လည်သတ်မှတ်ရန်',
      btnTelemetry: 'အချက်အလက်',
      cardDistance: 'အကွာအဝေး',
      constellationsBadge: 'ရှေးခေတ်ကောင်းကင်မြေပုံနှင့် နက္ခတ် ၂၇ လုံး',
      constellationsHeading: 'နက္ခတ်တာရာ အိမ်တော်များ',
      constellationsDesc: 'ရှေးခေတ် အာကာသဗေဒတွင် ကောင်းကင်ယံကို လသွားလမ်းကြောင်း နက္ခတ် ၂၇ လုံး (Nakshatras) နှင့် ခေတ်သစ် IAU သတ်မှတ်ချက် နက္ခတ်တာရာ ၈၈ ခုအဖြစ် ပိုင်းခြားထားပါသည်။ ပင်မကြယ်များနှင့် ကိုဩဒိနိတ်များကို လေ့လာရန် အောက်ပါတာရာများကို ရွေးချယ်ပါ။',
      iauDesignation: 'IAU တရားဝင် နက္ခတ်သတ်မှတ်ချက်',
      iauStandard: 'စံသတ်မှတ် နက္ခတ်တာရာ ၈၈ ခု',
      anchorStars: 'အဓိက အထင်ကရကြယ်များ',
      viewingWindow: 'အကောင်းဆုံး ကြည့်ရှုနိုင်သည့်ကာလ',
      deepSkyTargets: 'ပါဝင်သော အာကာသအရာဝတ္ထုများ',
      modalSpectrumLabel: 'ရောင်စဉ်မျိုးစုံ စစ်ထုတ်ကြည့်ရှုခြင်း',
      modalSpecVisible: 'သာမန်အလင်း',
      modalSpecInfrared: 'အနီအောက်ရောင်ခြည်',
      modalSpecXray: 'စွမ်းအင်မြင့်ရောင်ခြည်',
      modalRaLabel: 'အလင်းတက်မျဉ်း (RA)',
      modalDecLabel: 'အလင်းကျမျဉ်း (Dec)',
      modalDistLabel: 'အကွာအဝေး',
      modalMagLabel: 'မြင်သာတောက်ပမှု',
      modalDimLabel: 'မြင်သာအရွယ်အစား',
      modalDiamLabel: 'အမှန်တကယ်အချင်း',
      modalDiscoveredLabel: 'ရှာဖွေတွေ့ရှိသူ-',
      modalObsLabel: 'လေ့လာရေးယာဉ်များ-',
      modalSeasonLabel: 'အကောင်းဆုံးရာသီ-',
      modalGearLabel: 'အကြံပြုကိရိယာ-',
      btnCopyCoords: 'ကိုဩဒိနိတ် ကူးယူရန်',
      toastCopied: 'ကိုဩဒိနိတ်များကို ကူးယူပြီးပါပြီ',
      footerTitle: 'နက္ခတ္တ ကောင်းကင်ပြတိုက်',
      footerSub: 'ပွင့်လင်း နက္ခတ္တဗေဒ အချက်အလက်စံ',
      footerEpoch: 'J2000.0 ကိုဩဒိနိတ်စနစ် · IAU ၁၉၃၀ နယ်နိမိတ်များ',
      objectsCountSuffix: 'ခု ပြသထားသည်',
      objectsCountSingular: 'ခု ပြသထားသည်'
    }
  };

  /* ==========================================================================
     2. BILINGUAL CELESTIAL DATA CATALOG
     ========================================================================== */
  const CELESTIAL_CATALOG = [
    {
      id: 'm42',
      catalog: 'M42 · NGC 1976',
      name: {
        en: 'The Great Orion Nebula',
        my: 'အိုရီယွန် နက်ဗျူလာကြီး'
      },
      category: 'nebulae',
      subtype: {
        en: 'Diffuse Emission & Reflection Nebula',
        my: 'ဖြန့်ကျက် အလင်းလွှတ်နှင့် ရောင်ပြန် နက်ဗျူလာ'
      },
      constellation: {
        en: 'Orion (The Hunter · Mrigashira)',
        my: 'အိုရီယွန် တာရာ (မုဆိုးတာရာ · မဂ္ဂသီး နက္ခတ်)'
      },
      ra: '05h 35m 17.3s',
      dec: '-05° 23′ 28″',
      distanceLy: 1344,
      distanceFormatted: {
        en: '1,344 light-years (412 pc)',
        my: '၁,၃၄၄ အလင်းနှစ် (၄၁၂ ပါဆက်)'
      },
      apparentMagnitude: 4.0,
      apparentDimensions: '65′ × 60′',
      diameter: {
        en: '24 light-years',
        my: '၂၄ အလင်းနှစ်'
      },
      discoveredBy: {
        en: 'Nicolas-Claude Fabri de Peiresc (1610)',
        my: 'နီကိုလပ်စ် ကလော့ဒ် ဖာဘရီ (၁၆၁၀)'
      },
      instruments: {
        en: 'Hubble WFC3 / JWST NIRCam / Submillimeter Array',
        my: 'ဟာဘယ်လ် WFC3 / ဂျိမ်းစ်ဝက်ဘ် NIRCam / ဆာ့ဗ်မီလီမီတာ အခင်းအကျင်း'
      },
      primaryWavelength: 'Visible Optical & H-Alpha (656.3 nm)',
      bestSeason: {
        en: 'December – March (Northern Winter)',
        my: 'ဒီဇင်ဘာ – မတ်လ (ဆောင်းရာသီ)'
      },
      equipment: {
        en: 'Naked eye in dark skies; stunning in 80mm+ refractors',
        my: 'အမှောင်ကောင်းကင်တွင် ရိုးရိုးမျက်စိဖြင့် မြင်နိုင်ပြီး ၈၀ မမ မှန်ပြောင်းဖြင့် အလွန်လှပပါသည်'
      },
      image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1600&q=85',
      imageInfrared: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1600&q=85',
      description: {
        en: 'The closest massive star-forming region to Earth. Illuminated by the Trapezium open star cluster at its core, intense ultraviolet radiation carves ionized gas cavities and triggers embryonic protostellar collapse throughout the cloud.',
        my: 'ကမ္ဘာမြေနှင့် အနီးဆုံး ဧရာမ ကြယ်သစ်များ မွေးဖွားရာ ရပ်ဝန်းဖြစ်ပါသည်။ အလယ်ဗဟိုရှိ ထရပီဇီယမ် ကြယ်စုမှ ထွက်ပေါ်သော ပြင်းထန်သည့် ခရမ်းလွန်ရောင်ခြည်များသည် ဓာတ်ငွေ့လှိုဏ်ခေါင်းများကို ဖန်တီးကာ ကြယ်သစ်လောင်းများ ဖြစ်ပေါ်စေပါသည်။'
      }
    },
    {
      id: 'm31',
      catalog: 'M31 · NGC 224',
      name: {
        en: 'Andromeda Galaxy',
        my: 'အန်ဒရိုမီဒါ ဂလက်ဆီ'
      },
      category: 'galaxies',
      subtype: {
        en: 'Barred Spiral Galaxy (SA(s)b)',
        my: 'ဗဟိုဘားတန်းပါ ခရုပတ်ပုံ ဂလက်ဆီ'
      },
      constellation: {
        en: 'Andromeda (Chained Maiden · Uttara Bhadrapada)',
        my: 'အန်ဒရိုမီဒါ တာရာ (ဥတ္တရဘဒြပိုဒ် နက္ခတ်)'
      },
      ra: '00h 42m 44.3s',
      dec: '+41° 16′ 09″',
      distanceLy: 2537000,
      distanceFormatted: {
        en: '2.537 million light-years (778 kpc)',
        my: '၂.၅၃၇ သန်း အလင်းနှစ် (၇၇၈ ကီလိုပါဆက်)'
      },
      apparentMagnitude: 3.44,
      apparentDimensions: '178′ × 63′',
      diameter: {
        en: '220,000 light-years',
        my: '၂၂၀,၀၀၀ အလင်းနှစ်'
      },
      discoveredBy: {
        en: 'Abd al-Rahman al-Sufi (964 AD)',
        my: 'အဗ္ဗဒူ အယ်လ်-ရာမန် အယ်လ်-ဆူဖီ (အေဒီ ၉၆၄)'
      },
      instruments: {
        en: 'Sloan Digital Sky Survey / Galaxy Evolution Explorer / Hubble ACS',
        my: 'စလုံးန် ဒစ်ဂျစ်တယ် ကောင်းကင် / ဟာဘယ်လ် ACS'
      },
      primaryWavelength: 'Broadband Optical & Ultraviolet',
      bestSeason: {
        en: 'Autumn / Winter (October – January)',
        my: 'ဆောင်းဦး / ဆောင်းရာသီ (အောက်တိုဘာ – ဇန်နဝါရီ)'
      },
      equipment: {
        en: 'Binoculars reveal core; wide-field astrographs capture dust lanes',
        my: 'မှန်ပြောင်းအသေးဖြင့် ဗဟိုချက်ကို တွေ့နိုင်ပြီး ကျယ်ပြန့်မြင်ကွင်း ကင်မရာဖြင့် ဖုန်မှုန့်လမ်းကြောင်းများကို ဖမ်းယူနိုင်ပါသည်'
      },
      image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1600&q=85',
      imageInfrared: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85',
      description: {
        en: 'The dominant spiral galaxy of our Local Group, containing approximately one trillion stars. It is currently hurtling toward the Milky Way at 110 kilometers per second, destined for a magnificent gravitational merger in 4.5 billion years.',
        my: 'ကျွန်ုပ်တို့၏ မိခင် မိသားစုဝင် ဂလက်ဆီအုပ်စုတွင် အကြီးမားဆုံး ဂလက်ဆီဖြစ်ပြီး ကြယ်ပေါင်း တစ်ထရီလီယံခန့် ပါဝင်ပါသည်။ လက်ရှိတွင် မိနစ်တိုင်း၌ မိမိတို့ မစ်ကီးဝေးဂလက်ဆီဆီသို့ တစ်စက္ကန့်လျှင် ၁၁၀ ကီလိုမီတာနှုန်းဖြင့် ချဉ်းကပ်လျက်ရှိပြီး နောက် ၄.၅ ဘီလီယံနှစ်တွင် ပေါင်းစည်းသွားမည် ဖြစ်သည်။'
      }
    },
    {
      id: 'ngc3372',
      catalog: 'NGC 3372 · Caldwell 92',
      name: {
        en: 'Carina Nebula (Grand Nebula)',
        my: 'ကာရီနာ နက်ဗျူလာကြီး'
      },
      category: 'nebulae',
      subtype: {
        en: 'Giant H II Region & Starburst Complex',
        my: 'ဧရာမ H II ဒေသနှင့် ကြယ်ပေါက်ကွဲမွေးဖွားရာ နက်ဗျူလာ'
      },
      constellation: {
        en: 'Carina (The Keel · Agastya)',
        my: 'ကာရီနာ တာရာ (သင်္ဘောဦးပဲ့တာရာ)'
      },
      ra: '10h 45m 08.5s',
      dec: '-59° 52′ 04″',
      distanceLy: 8500,
      distanceFormatted: {
        en: '8,500 light-years (2,600 pc)',
        my: '၈,၅၀၀ အလင်းနှစ် (၂,၆၀၀ ပါဆက်)'
      },
      apparentMagnitude: 3.0,
      apparentDimensions: '120′ × 120′',
      diameter: {
        en: '460 light-years',
        my: '၄၆၀ အလင်းနှစ်'
      },
      discoveredBy: {
        en: 'Nicolas-Louis de Lacaille (1751)',
        my: 'နီကိုလပ်စ်-လူးဝစ် ဒီ လာကိုင် (၁၇၅၁)'
      },
      instruments: {
        en: 'JWST Cosmic Cliffs / VLT HAWK-I / Chandra X-ray',
        my: 'ဂျိမ်းစ်ဝက်ဘ် Cosmic Cliffs / ချန်ဒရာ ဓာတ်မှန်လေ့လာရေးယာဉ်'
      },
      primaryWavelength: 'Near-Infrared & Ionized Oxygen [O III]',
      bestSeason: {
        en: 'Southern Skies (March – June)',
        my: 'တောင်ဘက်ကောင်းကင် (မတ်လ – ဇွန်လ)'
      },
      equipment: {
        en: 'Spectacular in binoculars and fast f/4 astrographs',
        my: 'မှန်ပြောင်းအကြီးများဖြင့် အလွန်တရာ ခမ်းနားထည်ဝါစွာ တွေ့မြင်နိုင်ပါသည်'
      },
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=85',
      imageInfrared: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1600&q=85',
      description: {
        en: 'One of the largest and most volatile diffuse nebulae in the night sky, four times larger and far brighter than Orion. Home to Eta Carinae, a luminous hypergiant on the razor edge of a catastrophic hypernova explosion.',
        my: 'ညကောင်းကင်ယံရှိ အကြီးမားဆုံးနှင့် အလင်းလက်ဆုံး နက်ဗျူလာတစ်ခုဖြစ်ပြီး အိုရီယွန်ထက် လေးဆပိုမိုကြီးမားပါသည်။ အချိန်မရွေး စူပါနိုဗာအဖြစ် ပေါက်ကွဲနိုင်ခြေရှိသော အီတာကာရီနီ (Eta Carinae) ဟိုက်ပါဂျိုင်းရန့်ကြယ် တည်ရှိရာ နေရာဖြစ်ပါသည်။'
      }
    },
    {
      id: 'm16',
      catalog: 'M16 · NGC 6611',
      name: {
        en: 'The Eagle Nebula & Pillars of Creation',
        my: 'သိန်းငှက် နက်ဗျူလာနှင့် ဖန်ဆင်းခြင်းတိုင်လုံးများ'
      },
      category: 'nebulae',
      subtype: {
        en: 'Open Cluster embedded in Emission Nebula',
        my: 'အလင်းလွှတ်နက်ဗျူလာအတွင်း ပွင့်လင်းကြယ်အစုအဝေး'
      },
      constellation: {
        en: 'Serpens Cauda (The Serpent · Anuradha)',
        my: 'မြွေမြီးတာရာ (အနုရာဓ နက္ခတ်)'
      },
      ra: '18h 18m 48.0s',
      dec: '-13° 49′ 00″',
      distanceLy: 7000,
      distanceFormatted: {
        en: '7,000 light-years (2,150 pc)',
        my: '၇,၀၀၀ အလင်းနှစ် (၂,၁၅၀ ပါဆက်)'
      },
      apparentMagnitude: 6.0,
      apparentDimensions: '70′ × 55′',
      diameter: {
        en: '70 × 55 light-years',
        my: '၇၀ × ၅၅ အလင်းနှစ်'
      },
      discoveredBy: {
        en: 'Jean-Philippe de Chéseaux (1745)',
        my: 'ယန်း-ဖီးလစ် ဒီ ရှေဇို (၁၇၄၅)'
      },
      instruments: {
        en: 'Hubble Space Telescope / JWST NIRCam Mid-IR',
        my: 'ဟာဘယ်လ် အာကာသမှန်ပြောင်း / ဂျိမ်းစ်ဝက်ဘ် NIRCam'
      },
      primaryWavelength: 'H-alpha, [S II], and [O III] Narrowband',
      bestSeason: {
        en: 'Northern Summer (July – September)',
        my: 'နွေရာသီ (ဇူလိုင် – စက်တင်ဘာ)'
      },
      equipment: {
        en: '6-inch+ telescope with OIII or UHC filter',
        my: '၆ လက်မ အထက် နက္ခတ်မှန်ပြောင်းနှင့် OIII စစ်ထုတ်ကိရိယာ လိုအပ်ပါသည်'
      },
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1600&q=85',
      imageInfrared: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1600&q=85',
      description: {
        en: 'Towering spires of interstellar dust and hydrogen gas sculpting cosmic nurseries. Known worldwide as the Pillars of Creation, where finger-like evading globules shelter newborn protostars from blistering stellar winds.',
        my: 'ကြယ်သစ်ကလေးများကို ဖန်တီးပေးနေသော အာကာသ ဖုန်မှုန့်နှင့် ဟိုက်ဒရိုဂျင် ဓာတ်ငွေ့တိုင်လုံးကြီးများဖြစ်ပါသည်။ ကမ္ဘာတစ်ဝန်းတွင် "ဖန်ဆင်းခြင်းတိုင်လုံးများ" ဟု လူသိများပြီး ပြင်းထန်သော ကြယ်လေလှိုင်းဒဏ်မှ ကြယ်သစ်ပေါက်စလေးများကို ကာကွယ်ပေးထားပါသည်။'
      }
    },
    {
      id: 'm45',
      catalog: 'M45 · Melotte 22',
      name: {
        en: 'Pleiades (The Seven Sisters)',
        my: 'ဖျောက်ဆိပ်ကြယ်စု (ညီအစ်မခုနစ်ဖော်)'
      },
      category: 'clusters',
      subtype: {
        en: 'Open Star Cluster with Reflection Nebula',
        my: 'ရောင်ပြန်နက်ဗျူလာပါ ပွင့်လင်းကြယ်အစုအဝေး'
      },
      constellation: {
        en: 'Taurus (The Bull · Krittika)',
        my: 'ပြိဿတာရာ (နွားသိုးတာရာ · ကြတ္တိကာ နက္ခတ်)'
      },
      ra: '03h 47m 24.0s',
      dec: '+24° 07′ 00″',
      distanceLy: 444,
      distanceFormatted: {
        en: '444 light-years (136 pc)',
        my: '၄၄၄ အလင်းနှစ် (၁၃၆ ပါဆက်)'
      },
      apparentMagnitude: 1.6,
      apparentDimensions: '110′',
      diameter: {
        en: '17.5 light-years',
        my: '၁၇.၅ အလင်းနှစ်'
      },
      discoveredBy: {
        en: 'Known since antiquity (Homer, Hesiod, Rigveda)',
        my: 'ရှေးဟောင်းခေတ်ဦးကတည်းက လူသားများ သိရှိခဲ့ကြသည်'
      },
      instruments: {
        en: 'Subaru Telescope / Gaia Astrometry / Palomar Schmidt',
        my: 'ဆူဘာရူး မှန်ပြောင်း / ဂိုင်ယာ ဂြိုဟ်တု'
      },
      primaryWavelength: 'Visible Blue Optical (B-Band 445 nm)',
      bestSeason: {
        en: 'November – February',
        my: 'နိုဝင်ဘာ – ဖေဖော်ဝါရီ'
      },
      equipment: {
        en: 'Finest naked-eye cluster; superb in 7x50 binoculars',
        my: 'ရိုးရိုးမျက်စိဖြင့် အလွယ်တကူ မြင်နိုင်ပြီး ၇x၅၀ လက်ကိုင်မှန်ပြောင်းဖြင့် အလွန်လှပပါသည်'
      },
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1600&q=85',
      imageInfrared: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1600&q=85',
      description: {
        en: 'A luminous gathering of middle-aged, hot B-type stars passing through an unrelated interstellar dust cloud. The striking electric-blue nebulosity is pure starlight scattered by fine grains of carbon and silicate dust.',
        my: 'အလွန်ပူပြင်းတောက်ပသော အပြာရောင် B-အမျိုးအစား ကြယ်များ စုစည်းနေခြင်းဖြစ်ပါသည်။ ထူးခြားသော အပြာရောင် တိမ်တိုက်များသည် ကာဗွန်နှင့် ဆီလီကိတ် ဖုန်မှုန့်များမှတစ်ဆင့် ကြယ်အလင်း ပြန့်ကျဲရောင်ပြန်ဟပ်ရာမှ ဖြစ်ပေါ်လာခြင်း ဖြစ်ပါသည်။'
      }
    },
    {
      id: 'm104',
      catalog: 'M104 · NGC 4594',
      name: {
        en: 'The Sombrero Galaxy',
        my: 'ဆွမ်ဘရဲရိုး ဦးထုပ်ဂလက်ဆီ'
      },
      category: 'galaxies',
      subtype: {
        en: 'Unbarred Spiral / Lenticular Hybrid',
        my: 'ခရုပတ်ပုံနှင့် မှန်ဘီလူးပုံစပ် ဂလက်ဆီ'
      },
      constellation: {
        en: 'Virgo (The Maiden · Chitra)',
        my: 'ကန်တာရာ (အပျိုစင်တာရာ · စိတြ နက္ခတ်)'
      },
      ra: '12h 39m 59.4s',
      dec: '-11° 37′ 23″',
      distanceLy: 31100000,
      distanceFormatted: {
        en: '31.1 million light-years (9.55 Mpc)',
        my: '၃၁.၁ သန်း အလင်းနှစ် (၉.၅၅ မီဂါပါဆက်)'
      },
      apparentMagnitude: 8.0,
      apparentDimensions: '8.6′ × 4.2′',
      diameter: {
        en: '50,000 light-years',
        my: '၅၀,၀၀၀ အလင်းနှစ်'
      },
      discoveredBy: {
        en: 'Pierre Méchain (1781)',
        my: 'ပီယဲ မေရှန် (၁၇၈၁)'
      },
      instruments: {
        en: 'Hubble Space Telescope / Spitzer Infrared Telescope',
        my: 'ဟာဘယ်လ် အာကာသမှန်ပြောင်း / စပစ်ဇာ အနီအောက်ရောင်ခြည်'
      },
      primaryWavelength: 'Optical & Mid-Infrared Dust Ring',
      bestSeason: {
        en: 'Spring (April – June)',
        my: 'နွေဦးရာသီ (ဧပြီ – ဇွန်လ)'
      },
      equipment: {
        en: '4-inch telescope reveals dark dust belt across bright bulge',
        my: '၄ လက်မ မှန်ပြောင်းဖြင့် တောက်ပသော ဗဟိုချက်နှင့် ဖုန်မှုန့်ခါးပတ်စည်းကို တွေ့နိုင်ပါသည်'
      },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85',
      imageInfrared: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1600&q=85',
      description: {
        en: 'Celebrated for its brilliant spherical nucleus and an unusually prominent, razor-sharp lane of dark absorbing dust. At its heart lies a supermassive black hole with the mass of one billion suns.',
        my: 'မက္ကဆီကန် ဆွမ်ဘရဲရိုး ဦးထုပ်နှင့် သဏ္ဌာန်တူသောကြောင့် ကျော်ကြားပါသည်။ တောက်ပသော ဗဟိုဖောင်းကြွချက်နှင့် အလင်းစုပ်ယူသည့် ဖုန်မှုန့်ခါးပတ်တို့ အချိုးညီစွာ တည်ရှိပြီး ဗဟိုတွင် နေအစင်းပေါင်း တစ်ဘီလီယံအလေးချိန်ရှိ အလွန်ကြီးမားသော တွင်းနက်ကြီး တည်ရှိပါသည်။'
      }
    },
    {
      id: 'ngc6960',
      catalog: 'NGC 6960 · The Cygnus Loop',
      name: {
        en: 'The Western Veil Nebula (Witch’s Broom)',
        my: 'ဇာပုဝါ နက်ဗျူလာ (စုန်းမတံမြက်စည်း)'
      },
      category: 'nebulae',
      subtype: {
        en: 'Supernova Remnant Shockfront',
        my: 'စူပါနိုဗာ ကြယ်ပေါက်ကွဲမှု အကြွင်းအကျန် လှိုင်းမျက်နှာစာ'
      },
      constellation: {
        en: 'Cygnus (The Swan · Shravana)',
        my: 'ဟင်္သာတာရာ (သရဝဏ် နက္ခတ်)'
      },
      ra: '20h 45m 38.0s',
      dec: '+30° 42′ 30″',
      distanceLy: 2400,
      distanceFormatted: {
        en: '2,400 light-years (735 pc)',
        my: '၂,၄၀၀ အလင်းနှစ် (၇၃၅ ပါဆက်)'
      },
      apparentMagnitude: 7.0,
      apparentDimensions: '210′ × 180′ (Entire loop)',
      diameter: {
        en: '130 light-years',
        my: '၁၃၀ အလင်းနှစ်'
      },
      discoveredBy: {
        en: 'William Herschel (1784)',
        my: 'ဝီလျံ ဟာရှယ် (၁၇၈၄)'
      },
      instruments: {
        en: 'Chandra X-Ray Observatory / Hubble WFC3 / Isaac Newton Tel',
        my: 'ချန်ဒရာ X-Ray / ဟာဘယ်လ် WFC3'
      },
      primaryWavelength: 'O III (500.7 nm) & H-alpha (656.3 nm)',
      bestSeason: {
        en: 'Late Summer – Autumn (August – November)',
        my: 'နွေနှောင်း – ဆောင်းဦး (သြဂုတ် – နိုဝင်ဘာ)'
      },
      equipment: {
        en: 'Requires OIII filter and wide-field telescope',
        my: 'OIII အလင်းစစ်ကိရိယာနှင့် မြင်ကွင်းကျယ် မှန်ပြောင်း လိုအပ်ပါသည်'
      },
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
      imageInfrared: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1600&q=85',
      description: {
        en: 'The gossamer expansion veil of a massive star that detonated 10,000 to 20,000 years ago. Supersonic shockwaves plow into interstellar medium gas, compressing atoms and lighting them up in ethereal braided filaments.',
        my: 'လွန်ခဲ့သော နှစ်ပေါင်း ၁၀,၀၀၀ မှ ၂၀,၀၀၀ ကြားက ဧရာမကြယ်ကြီးတစ်လုံး ပေါက်ကွဲသွားရာမှ ကျန်ရစ်သော သိမ်မွေ့နူးညံ့သည့် ဇာပုဝါကဲ့သို့ ဓာတ်ငွေ့အကြွင်းအကျန်များ ဖြစ်ပါသည်။ အသံထက်မြန်သော လှိုင်းလုံးများသည် အာကာသဓာတ်ငွေ့များကို တိုက်ခတ်ကာ အရောင်အသွေးစုံ လင်းလက်စေပါသည်။'
      }
    },
    {
      id: 'm13',
      catalog: 'M13 · NGC 6205',
      name: {
        en: 'Great Globular Cluster in Hercules',
        my: 'ဟာကျူလီ ကြယ်စုလုံးကြီး'
      },
      category: 'clusters',
      subtype: {
        en: 'Dense Globular Star Cluster',
        my: 'သိပ်သည်းသော လုံးဝန်းကြယ်အစုအဝေး'
      },
      constellation: {
        en: 'Hercules (The Kneeler)',
        my: 'ဟာကျူလီ တာရာ (ခွန်အားရှင်တာရာ)'
      },
      ra: '16h 41m 41.6s',
      dec: '+36° 27′ 35″',
      distanceLy: 22200,
      distanceFormatted: {
        en: '22,200 light-years (6,800 pc)',
        my: '၂၂,၂၀၀ အလင်းနှစ် (၆,၈၀၀ ပါဆက်)'
      },
      apparentMagnitude: 5.8,
      apparentDimensions: '20′',
      diameter: {
        en: '145 light-years',
        my: '၁၄၅ အလင်းနှစ်'
      },
      discoveredBy: {
        en: 'Edmond Halley (1714)',
        my: 'အက်ဒမန် ဟာလေ (၁၇၁၄)'
      },
      instruments: {
        en: 'Hubble Space Telescope / Arecibo Observatory Radio Message',
        my: 'ဟာဘယ်လ် အာကာသမှန်ပြောင်း / အာရီစီဘို ရေဒီယိုသတင်းစကား'
      },
      primaryWavelength: 'Visible Optical Continuum',
      bestSeason: {
        en: 'Summer (May – September)',
        my: 'နွေရာသီ (မေ – စက်တင်ဘာ)'
      },
      equipment: {
        en: 'Binoculars show fuzzy pearl; 8-inch resolves hundreds of pinpoints',
        my: 'လက်ကိုင်မှန်ပြောင်းဖြင့် တိမ်မြူလုံးသဖွယ် မြင်ရပြီး ၈ လက်မ မှန်ပြောင်းဖြင့် ကြယ်ပွင့်ထောင်ပေါင်းများစွာကို ခွဲခြားမြင်နိုင်ပါသည်'
      },
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=85',
      imageInfrared: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1600&q=85',
      description: {
        en: 'A gravitationally bound swarm of over 300,000 ancient stars crowded into a dense ball. In 1974, the Arecibo radio telescope broadcast humanity’s famous interstellar message toward this magnificent stellar metropolis.',
        my: 'ရှေးဟောင်းကြယ်ပေါင်း ၃၀၀,၀၀၀ ကျော် ဆွဲငင်အားဖြင့် စုစည်းသိပ်သည်းနေသော လုံးဝန်းကြယ်အစုအဝေး ဖြစ်ပါသည်။ ၁၉၇၄ ခုနှစ်တွင် အာရီစီဘို ရေဒီယိုမှန်ပြောင်းမှ လူသားတို့၏ နာမည်ကျော် အာကာသသတင်းစကားကို ဤကြယ်စုဆီသို့ ထုတ်လွှင့်ခဲ့ဖူးပါသည်။'
      }
    },
    {
      id: 'm51',
      catalog: 'M51 · NGC 5194',
      name: {
        en: 'The Whirlpool Galaxy',
        my: 'ရေဝဲဂလက်ဆီ'
      },
      category: 'galaxies',
      subtype: {
        en: 'Grand-Design Interacting Spiral Galaxy',
        my: 'အချိုးကျ ခရုပတ်ပုံ တွဲဖက်ဂလက်ဆီ'
      },
      constellation: {
        en: 'Canes Venatici (Hunting Dogs)',
        my: 'အမဲလိုက်ခွေးတာရာ'
      },
      ra: '13h 29m 52.7s',
      dec: '+47° 11′ 43″',
      distanceLy: 23000000,
      distanceFormatted: {
        en: '23 million light-years (7.1 Mpc)',
        my: '၂၃ သန်း အလင်းနှစ် (၇.၁ မီဂါပါဆက်)'
      },
      apparentMagnitude: 8.4,
      apparentDimensions: '11.2′ × 6.9′',
      diameter: {
        en: '76,000 light-years',
        my: '၇၆,၀၀၀ အလင်းနှစ်'
      },
      discoveredBy: {
        en: 'Charles Messier (1773)',
        my: 'ချားလ်စ် မက်ဆီယာ (၁၇၇၃)'
      },
      instruments: {
        en: 'Hubble Space Telescope / JWST MIRI Infrared',
        my: 'ဟာဘယ်လ် အာကာသမှန်ပြောင်း / ဂျိမ်းစ်ဝက်ဘ် MIRI'
      },
      primaryWavelength: 'Optical & Near/Mid Infrared Dust Tracers',
      bestSeason: {
        en: 'Spring – Early Summer',
        my: 'နွေဦး – နွေရာသီဦး'
      },
      equipment: {
        en: '6-inch telescope under dark skies reveals spiral structure',
        my: 'ကောင်းကင်ကြည်လင်သောအမှောင်တွင် ၆ လက်မ မှန်ပြောင်းဖြင့် ခရုပတ်လက်တံများကို တွေ့နိုင်ပါသည်'
      },
      image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1600&q=85',
      imageInfrared: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85',
      description: {
        en: 'The archetype of grand-design spiral galaxies, displaying majestic spiral density waves triggered by close gravitational interaction with its companion dwarf galaxy NGC 5195. Lord Rosse first recognized its spiral form in 1845.',
        my: 'ခရုပတ်ပုံသဏ္ဌာန် အထင်းရှားဆုံး ဂလက်ဆီဖြစ်ပြီး အနီးရှိ အဖော်ဂလက်ဆီငယ် NGC 5195 နှင့် ဆွဲငင်အား အပြန်အလှန်သက်ရောက်မှုကြောင့် ခရုပတ်လက်တံများ လှပစွာ လှိုင်းထနေခြင်း ဖြစ်ပါသည်။ ၁၈၄၅ ခုနှစ်တွင် လော့ဒ် ရို့စ် က ၎င်း၏ ခရုပတ်ပုံသဏ္ဌာန်ကို ပထမဆုံး စတင်မှတ်တမ်းတင်ခဲ့ပါသည်။'
      }
    }
  ];

  /* ==========================================================================
     3. HERO WAVELENGTH PRESETS (BILINGUAL)
     ========================================================================== */
  const WAVELENGTH_PRESETS = {
    visible: {
      title: {
        en: 'Visible Spectrum (Optical RGB)',
        my: 'သာမန်အလင်း ရောင်စဉ် (Optical RGB)'
      },
      bgUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2400&q=85',
      ra: 'RA 05h 35m 17s',
      dec: 'Dec -05° 23′ 28″',
      band: {
        en: 'λ 400–700 nm · Optical Broadband',
        my: 'λ ၄၀၀–၇၀၀ nm · သာမန်အလင်း လှိုင်းအလျား'
      },
      instrument: 'HST WFC3 / Ground-based 8.2m VLT'
    },
    infrared: {
      title: {
        en: 'Infrared (JWST NIRCam / MIRI)',
        my: 'အနီအောက်ရောင်ခြည် (ဂျိမ်းစ်ဝက်ဘ် NIRCam / MIRI)'
      },
      bgUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=2400&q=85',
      ra: 'RA 18h 18m 48s',
      dec: 'Dec -13° 49′ 00″',
      band: {
        en: 'λ 1.25–28.0 µm · Thermal & Dust Penetration',
        my: 'λ ၁.၂၅–၂၈.၀ µm · အပူလှိုင်းနှင့် ဖုန်မှုန့်ဖောက်ထွင်းလှိုင်း'
      },
      instrument: 'James Webb Space Telescope (JWST)'
    },
    deepnebula: {
      title: {
        en: 'Deep Nebula & X-Ray Composite',
        my: 'နက်ဗျူလာ အထူးမြင်ကွင်းနှင့် ဓာတ်မှန်လှိုင်းစပ်'
      },
      bgUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=2400&q=85',
      ra: 'RA 20h 45m 38s',
      dec: 'Dec +30° 42′ 30″',
      band: {
        en: 'λ 0.1–10 keV · High Energy Hα + Chandra',
        my: 'λ ၀.၁–၁၀ keV · စွမ်းအင်မြင့် Hα နှင့် ချန်ဒရာ'
      },
      instrument: 'Chandra X-Ray / ESO VLT Multi-Band'
    }
  };

  /* ==========================================================================
     4. CONSTELLATIONS & NAKSHATRA MANSIONS (BILINGUAL)
     ========================================================================== */
  const CONSTELLATIONS_DATA = [
    {
      id: 'orion',
      latinName: 'Orion',
      nakshatraName: {
        en: 'Mrigashira & Ardra',
        my: 'မဂ္ဂသီး နှင့် အာဒြ နက္ခတ်'
      },
      meaning: {
        en: 'The Hunter / Celestial Deer Head',
        my: 'မုဆိုးတာရာ / သမင်ခေါင်းသဏ္ဌာန်'
      },
      keyStars: {
        en: 'Betelgeuse, Rigel, Bellatrix, Alnitak',
        my: 'ဗီတယ်လ်ဂျူးစ်၊ ရီဂျယ်လ်၊ ဘယ်လာထရစ်၊ အာနီတက်ခ်'
      },
      bestVisibility: {
        en: 'Northern Winter (December)',
        my: 'ဆောင်းရာသီ (ဒီဇင်ဘာလ)'
      },
      deepSkyTreasures: {
        en: 'M42 Orion Nebula, Horsehead, Flame Nebula',
        my: 'M42 အိုရီယွန် နက်ဗျူလာ၊ မြင်းခေါင်း နက်ဗျူလာ၊ မီးတောက် နက်ဗျူလာ'
      },
      coordinates: 'RA 05h 30m · Dec +00° 00′'
    },
    {
      id: 'taurus',
      latinName: 'Taurus',
      nakshatraName: {
        en: 'Rohini & Krittika',
        my: 'ရောဟဏီ နှင့် ကြတ္တိကာ နက္ခတ်'
      },
      meaning: {
        en: 'The Bull / The Red Celestial Eye',
        my: 'ပြိဿတာရာ (နွားသိုး) / နီမြန်းသော ကောင်းကင်မျက်လုံး'
      },
      keyStars: {
        en: 'Aldebaran, Elnath, Alcyone',
        my: 'အယ်လ်ဒီဘရန်၊ အယ်လ်နက်၊ အယ်လ်ဆီယွန်'
      },
      bestVisibility: {
        en: 'Winter (January)',
        my: 'ဆောင်းရာသီ (ဇန်နဝါရီလ)'
      },
      deepSkyTreasures: {
        en: 'M45 Pleiades, M1 Crab Nebula, Hyades',
        my: 'M45 ဖျောက်ဆိပ်ကြယ်စု၊ M1 ဂဏန်း နက်ဗျူလာ'
      },
      coordinates: 'RA 04h 30m · Dec +15° 00′'
    },
    {
      id: 'cygnus',
      latinName: 'Cygnus',
      nakshatraName: {
        en: 'Shravana & Dhanishta',
        my: 'သရဝဏ် နှင့် ဓနသိဒ္ဓိ နက္ခတ်'
      },
      meaning: {
        en: 'The Swan / Northern Cross',
        my: 'ဟင်္သာတာရာ / မြောက်ဘက်ကြက်ခြေခတ်'
      },
      keyStars: {
        en: 'Deneb, Albireo, Sadr',
        my: 'ဒနက်ဘ်၊ အယ်လ်ဘီရီယို၊ ဆာဒါ'
      },
      bestVisibility: {
        en: 'Summer / Autumn (September)',
        my: 'နွေရာသီ / ဆောင်းဦး (စက်တင်ဘာလ)'
      },
      deepSkyTreasures: {
        en: 'Veil Nebula (NGC 6960), North America Nebula',
        my: 'ဇာပုဝါ နက်ဗျူလာ (NGC 6960)၊ မြောက်အမေရိက နက်ဗျူလာ'
      },
      coordinates: 'RA 20h 40m · Dec +42° 00′'
    },
    {
      id: 'ursa_major',
      latinName: 'Ursa Major',
      nakshatraName: {
        en: 'Saptarshi (Seven Sages)',
        my: 'သတ္တရသျှီ (ရသေ့ခုနစ်ပါး / စပါယ်ရှယ် ကြယ်ခုနစ်လုံး)'
      },
      meaning: {
        en: 'The Great Bear / The Celestial Plough',
        my: 'ဝက်ဝံကြီးတာရာ / ကောင်းကင်ထွန်တုံးသဏ္ဌာန်'
      },
      keyStars: {
        en: 'Dubhe, Merak, Alioth, Mizar, Alkaid',
        my: 'ဒူဘီ၊ မီရက်၊ အလီယော့၊ မီဇာ၊ အယ်လ်ခိတ်'
      },
      bestVisibility: {
        en: 'Circumpolar / Spring (April)',
        my: 'တစ်နှစ်ပတ်လုံး / နွေဦးရာသီ (ဧပြီလ)'
      },
      deepSkyTreasures: {
        en: 'M81 Bode’s Galaxy, M82 Cigar Galaxy, M101 Pinwheel',
        my: 'M81 ဘုတ် ဂလက်ဆီ၊ M82 ဆေးလိပ်ပုံ ဂလက်ဆီ၊ M101 ဒင်္ဂါးပြားဂလက်ဆီ'
      },
      coordinates: 'RA 11h 00m · Dec +55° 00′'
    },
    {
      id: 'scorpius',
      latinName: 'Scorpius',
      nakshatraName: {
        en: 'Jyeshtha & Anuradha',
        my: 'ဇေဋ္ဌ နှင့် အနုရာဓ နက္ခတ်'
      },
      meaning: {
        en: 'The Scorpion / Heart of Gold',
        my: 'ဗြိစ္ဆာတာရာ (ကင်းမြီးကောက်) / ရွှေနှလုံးသား'
      },
      keyStars: {
        en: 'Antares, Shaula, Sargas',
        my: 'အန်တာရီစ်၊ ရှောလာ၊ ဆာဂတ်စ်'
      },
      bestVisibility: {
        en: 'Summer (July)',
        my: 'မိုးရာသီ / နွေရာသီ (ဇူလိုင်လ)'
      },
      deepSkyTreasures: {
        en: 'M4 Globular Cluster, M6 Butterfly, M7 Ptolemy',
        my: 'M4 လုံးဝန်းကြယ်စု၊ M6 လိပ်ပြာကြယ်စု၊ M7 တိုလမီကြယ်စု'
      },
      coordinates: 'RA 16h 50m · Dec -30° 00′'
    }
  ];

  /* ==========================================================================
     5. STATE & DOM REFERENCES
     ========================================================================== */
  const state = {
    lang: localStorage.getItem('nakshatra_lang') || 'en',
    currentWavelength: 'visible',
    activeFilter: 'all',
    searchQuery: '',
    sortBy: 'featured',
    selectedObjectId: null,
    modalActiveSpectrum: 'visible',
    lastFocusedElement: null
  };

  const dom = {
    // Language buttons
    langBtns: document.querySelectorAll('[data-set-lang]'),

    // Nav & Mobile Drawer
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileNavDrawer: document.getElementById('mobileNavDrawer'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),

    // Hero Wavelength Switcher
    wavelengthBtns: document.querySelectorAll('[data-wavelength]'),
    heroBgVisible: document.getElementById('heroBgVisible'),
    heroBgInfrared: document.getElementById('heroBgInfrared'),
    heroBgNebula: document.getElementById('heroBgNebula'),
    liveTelemetryBadge: document.getElementById('liveTelemetryBadge'),

    // Observatory Clocks
    liveUtcClock: document.getElementById('liveUtcClock'),
    liveSiderealClock: document.getElementById('liveSiderealClock'),

    // Gallery & Filter Grid
    galleryGrid: document.getElementById('galleryGrid'),
    filterTabs: document.querySelectorAll('[data-filter]'),
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    sortSelect: document.getElementById('sortSelect'),
    objectCountLabel: document.getElementById('objectCountLabel'),
    noResultsMessage: document.getElementById('noResultsMessage'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),

    // Constellations
    constellationCards: document.querySelectorAll('[data-constellation-id]'),
    constellationDetailCard: document.getElementById('constellationDetailCard'),

    // Lightbox Modal
    telemetryModal: document.getElementById('telemetryModal'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    modalPanel: document.getElementById('modalPanel'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),

    // Modal Content
    modalImage: document.getElementById('modalImage'),
    modalCatalog: document.getElementById('modalCatalog'),
    modalName: document.getElementById('modalName'),
    modalSubtypeBadge: document.getElementById('modalSubtypeBadge'),
    modalConstellationBadge: document.getElementById('modalConstellationBadge'),
    modalDescription: document.getElementById('modalDescription'),
    modalRa: document.getElementById('modalRa'),
    modalDec: document.getElementById('modalDec'),
    modalDistance: document.getElementById('modalDistance'),
    modalMagnitude: document.getElementById('modalMagnitude'),
    modalDimensions: document.getElementById('modalDimensions'),
    modalDiameter: document.getElementById('modalDiameter'),
    modalDiscovered: document.getElementById('modalDiscovered'),
    modalInstruments: document.getElementById('modalInstruments'),
    modalBestSeason: document.getElementById('modalBestSeason'),
    modalEquipment: document.getElementById('modalEquipment'),
    modalSpectrumToggleBtns: document.querySelectorAll('[data-modal-spectrum]'),
    copyCoordsBtn: document.getElementById('copyCoordsBtn'),

    // Toast
    copyToast: document.getElementById('copyToast')
  };

  /* ==========================================================================
     6. LANGUAGE & TRANSLATION ENGINE
     ========================================================================== */
  function setLanguage(lang) {
    if (!['en', 'my'].includes(lang)) lang = 'en';
    state.lang = lang;
    localStorage.setItem('nakshatra_lang', lang);

    // Set HTML lang attribute for CSS font and line-height adjustments
    document.documentElement.lang = lang;

    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'INPUT' && el.getAttribute('type') === 'search') {
          el.placeholder = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    // Update language button active classes
    dom.langBtns.forEach(btn => {
      const targetLang = btn.getAttribute('data-set-lang');
      const isActive = targetLang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Refresh Wavelength Live readout in active language
    setWavelength(state.currentWavelength);

    // Re-render gallery cards with localized fields
    renderGallery();

    // Re-render active constellation
    const activeConstellation = document.querySelector('[data-constellation-id].bg-white\\/10') || dom.constellationCards[0];
    if (activeConstellation) {
      renderConstellationDetail(activeConstellation.getAttribute('data-constellation-id'));
    }

    // Refresh modal if currently open
    if (state.selectedObjectId && !dom.telemetryModal.classList.contains('hidden')) {
      populateModalContent(state.selectedObjectId);
    }
  }

  function initLanguageSwitcher() {
    dom.langBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = btn.getAttribute('data-set-lang');
        setLanguage(selectedLang);
      });
    });
  }

  /* ==========================================================================
     7. HERO WAVELENGTH SWITCHER
     ========================================================================== */
  function setWavelength(mode) {
    if (!WAVELENGTH_PRESETS[mode]) return;
    state.currentWavelength = mode;
    const preset = WAVELENGTH_PRESETS[mode];
    const isMy = state.lang === 'my';

    // Toggle background layers
    if (dom.heroBgVisible) dom.heroBgVisible.classList.toggle('active', mode === 'visible');
    if (dom.heroBgInfrared) dom.heroBgInfrared.classList.toggle('active', mode === 'infrared');
    if (dom.heroBgNebula) dom.heroBgNebula.classList.toggle('active', mode === 'deepnebula');

    // Update active button state
    dom.wavelengthBtns.forEach(btn => {
      const isTarget = btn.getAttribute('data-wavelength') === mode;
      btn.setAttribute('aria-pressed', isTarget ? 'true' : 'false');
      if (isTarget) {
        btn.classList.add('bg-white', 'text-zinc-950', 'shadow-sm');
        btn.classList.remove('text-zinc-300', 'hover:text-white', 'hover:bg-white/10');
      } else {
        btn.classList.remove('bg-white', 'text-zinc-950', 'shadow-sm');
        btn.classList.add('text-zinc-300', 'hover:text-white', 'hover:bg-white/10');
      }
    });

    // Update Hero Telemetry readout
    if (dom.liveTelemetryBadge) {
      const bandText = isMy ? preset.band.my : preset.band.en;
      dom.liveTelemetryBadge.innerHTML = `
        <span class="inline-flex items-center gap-1.5 font-mono text-zinc-300">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>${preset.ra}</span>
          <span class="text-zinc-600">·</span>
          <span>${preset.dec}</span>
          <span class="text-zinc-600 hidden sm:inline">·</span>
          <span class="text-zinc-400 hidden sm:inline">${bandText}</span>
        </span>
      `;
    }
  }

  function initWavelengthSwitcher() {
    dom.wavelengthBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-wavelength');
        setWavelength(mode);
      });
    });
  }

  /* ==========================================================================
     8. CELESTIAL CLOCKS
     ========================================================================== */
  function updateCelestialClocks() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    if (dom.liveUtcClock) {
      dom.liveUtcClock.textContent = `${hours}:${minutes}:${seconds} UTC`;
    }

    const d = (now.getTime() / 86400000) - 10957.5;
    let gmstHours = (18.697374558 + 24.06570982441908 * d) % 24;
    if (gmstHours < 0) gmstHours += 24;
    const gmstH = Math.floor(gmstHours);
    const gmstM = Math.floor((gmstHours - gmstH) * 60);
    const gmstS = Math.floor(((gmstHours - gmstH) * 60 - gmstM) * 60);
    const formattedLST = `LST ${String(gmstH).padStart(2, '0')}h ${String(gmstM).padStart(2, '0')}m ${String(gmstS).padStart(2, '0')}s`;

    if (dom.liveSiderealClock) {
      dom.liveSiderealClock.textContent = formattedLST;
    }
  }

  /* ==========================================================================
     9. DEEP-SKY EXPLORER GALLERY & FILTERING
     ========================================================================== */
  function getFilteredObjects() {
    let list = [...CELESTIAL_CATALOG];
    const isMy = state.lang === 'my';

    // Category
    if (state.activeFilter !== 'all') {
      list = list.filter(item => item.category === state.activeFilter);
    }

    // Search
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      list = list.filter(item => {
        const nameStr = (item.name.en + ' ' + item.name.my).toLowerCase();
        const descStr = (item.description.en + ' ' + item.description.my).toLowerCase();
        const constStr = (item.constellation.en + ' ' + item.constellation.my).toLowerCase();
        return (
          nameStr.includes(q) ||
          item.catalog.toLowerCase().includes(q) ||
          constStr.includes(q) ||
          descStr.includes(q)
        );
      });
    }

    // Sort
    if (state.sortBy === 'distance-asc') {
      list.sort((a, b) => a.distanceLy - b.distanceLy);
    } else if (state.sortBy === 'distance-desc') {
      list.sort((a, b) => b.distanceLy - a.distanceLy);
    } else if (state.sortBy === 'magnitude-asc') {
      list.sort((a, b) => a.apparentMagnitude - b.apparentMagnitude);
    }

    return list;
  }

  function renderGallery() {
    if (!dom.galleryGrid) return;
    const items = getFilteredObjects();
    const isMy = state.lang === 'my';
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;

    // Object count label
    if (dom.objectCountLabel) {
      if (isMy) {
        dom.objectCountLabel.textContent = `စုစုပေါင်း ${items.length} ${t.objectsCountSuffix}`;
      } else {
        dom.objectCountLabel.textContent = `${items.length} ${items.length === 1 ? t.objectsCountSingular : t.objectsCountSuffix}`;
      }
    }

    // Empty state
    if (items.length === 0) {
      dom.galleryGrid.innerHTML = '';
      if (dom.noResultsMessage) dom.noResultsMessage.classList.remove('hidden');
      return;
    }

    if (dom.noResultsMessage) dom.noResultsMessage.classList.add('hidden');

    // Render cards
    dom.galleryGrid.innerHTML = items.map((item, index) => {
      const animDelay = (index % 6) * 0.08;
      const itemName = isMy ? item.name.my : item.name.en;
      const itemDesc = isMy ? item.description.my : item.description.en;
      const itemConst = isMy ? item.constellation.my : item.constellation.en;
      const itemDist = isMy ? item.distanceFormatted.my.split('(')[0] : item.distanceFormatted.en.split('(')[0];

      return `
        <article 
          class="group glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col transition-all duration-300 relative"
          style="animation: fadeSlideIn 0.5s ease-out ${animDelay}s both;"
          data-card-id="${item.id}"
        >
          <!-- Reticle optical corner markings -->
          <div class="reticle-corner reticle-tl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="reticle-corner reticle-tr opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="reticle-corner reticle-bl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="reticle-corner reticle-br opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <!-- Image Container -->
          <div class="card-image-wrap aspect-[16/10] bg-zinc-950 relative overflow-hidden">
            <img 
              src="${item.image}" 
              alt="${itemName} (${item.catalog})" 
              loading="lazy" 
              class="w-full h-full object-cover object-center filter brightness-95 group-hover:brightness-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

            <!-- Top Floating Badges -->
            <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-zinc-950/80 text-zinc-300 ring-1 ring-white/15 backdrop-blur-md">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                ${item.catalog}
              </span>
              <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-sans font-medium bg-white/10 text-zinc-200 ring-1 ring-white/10 backdrop-blur-md uppercase tracking-wider">
                ${t['filter' + item.category.charAt(0).toUpperCase() + item.category.slice(1)] || item.category}
              </span>
            </div>

            <!-- Bottom Image Info Bar -->
            <div class="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span class="truncate">${item.ra}</span>
              <span class="text-zinc-200 font-medium">Mag ${item.apparentMagnitude}</span>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                <i data-lucide="compass" class="w-3.5 h-3.5 text-zinc-500"></i>
                <span class="truncate">${itemConst}</span>
              </div>
              <h3 class="font-serif text-2xl text-zinc-100 tracking-tight leading-snug group-hover:text-white transition-colors">
                ${itemName}
              </h3>
              <p class="text-xs text-zinc-400 font-sans mt-2 line-clamp-2 leading-relaxed">
                ${itemDesc}
              </p>
            </div>

            <!-- Telemetry summary bar -->
            <div class="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
              <div class="text-left">
                <div class="text-[10px] uppercase tracking-wider text-zinc-400 font-sans">${t.cardDistance}</div>
                <div class="text-xs font-mono text-zinc-300 font-medium">${itemDist}</div>
              </div>
              
              <button 
                type="button" 
                class="inspect-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-white/10 hover:bg-white hover:text-zinc-950 ring-1 ring-white/15 transition-all duration-200"
                data-id="${item.id}"
                aria-label="Inspect telemetry for ${itemName}"
              >
                <span>${t.btnTelemetry}</span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function initGalleryEvents() {
    // Filter tabs
    dom.filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        dom.filterTabs.forEach(t => {
          t.classList.remove('bg-white', 'text-zinc-950', 'shadow-sm');
          t.classList.add('text-zinc-300', 'hover:text-white', 'hover:bg-white/10');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('bg-white', 'text-zinc-950', 'shadow-sm');
        tab.classList.remove('text-zinc-300', 'hover:text-white', 'hover:bg-white/10');
        tab.setAttribute('aria-selected', 'true');

        state.activeFilter = tab.getAttribute('data-filter') || 'all';
        renderGallery();
      });
    });

    // Nav filter triggers (e.g., Nebulae & Galaxies link)
    document.querySelectorAll('[data-nav-filter]').forEach(navLink => {
      navLink.addEventListener('click', () => {
        const targetCategory = navLink.getAttribute('data-nav-filter');
        const targetTab = Array.from(dom.filterTabs).find(t => t.getAttribute('data-filter') === targetCategory);
        if (targetTab) {
          targetTab.click();
        }
      });
    });

    // Search input
    if (dom.searchInput) {
      dom.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (dom.clearSearchBtn) {
          dom.clearSearchBtn.classList.toggle('hidden', state.searchQuery === '');
        }
        renderGallery();
      });
    }

    // Clear search
    if (dom.clearSearchBtn) {
      dom.clearSearchBtn.addEventListener('click', () => {
        if (dom.searchInput) dom.searchInput.value = '';
        state.searchQuery = '';
        dom.clearSearchBtn.classList.add('hidden');
        renderGallery();
      });
    }

    // Sort select
    if (dom.sortSelect) {
      dom.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderGallery();
      });
    }

    // Reset filters button
    if (dom.resetFiltersBtn) {
      dom.resetFiltersBtn.addEventListener('click', () => {
        state.activeFilter = 'all';
        state.searchQuery = '';
        state.sortBy = 'featured';
        if (dom.searchInput) dom.searchInput.value = '';
        if (dom.sortSelect) dom.sortSelect.value = 'featured';
        if (dom.clearSearchBtn) dom.clearSearchBtn.classList.add('hidden');
        
        dom.filterTabs.forEach(t => {
          const isAll = t.getAttribute('data-filter') === 'all';
          t.classList.toggle('bg-white', isAll);
          t.classList.toggle('text-zinc-950', isAll);
          t.classList.toggle('text-zinc-300', !isAll);
        });

        renderGallery();
      });
    }

    // Event delegation on gallery grid for inspecting cards
    if (dom.galleryGrid) {
      dom.galleryGrid.addEventListener('click', (e) => {
        const inspectBtn = e.target.closest('.inspect-btn');
        const card = e.target.closest('[data-card-id]');
        
        if (inspectBtn) {
          const id = inspectBtn.getAttribute('data-id');
          openTelemetryModal(id, inspectBtn);
        } else if (card) {
          const id = card.getAttribute('data-card-id');
          openTelemetryModal(id, card);
        }
      });
    }
  }

  /* ==========================================================================
     10. CONSTELLATIONS & NAKSHATRA INTERACTIVE EXPLORER
     ========================================================================== */
  function renderConstellationDetail(constellationId) {
    const item = CONSTELLATIONS_DATA.find(c => c.id === constellationId);
    if (!item || !dom.constellationDetailCard) return;

    const isMy = state.lang === 'my';
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;

    const nakshatraName = isMy ? item.nakshatraName.my : item.nakshatraName.en;
    const meaning = isMy ? item.meaning.my : item.meaning.en;
    const keyStars = isMy ? item.keyStars.my : item.keyStars.en;
    const bestVis = isMy ? item.bestVisibility.my : item.bestVisibility.en;
    const treasures = isMy ? item.deepSkyTreasures.my : item.deepSkyTreasures.en;

    dom.constellationDetailCard.innerHTML = `
      <div class="p-6 md:p-8 flex flex-col justify-between h-full">
        <div>
          <div class="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-zinc-300">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              ${t.constellationsBadge}
            </span>
            <span>${item.coordinates}</span>
          </div>

          <h3 class="font-serif text-3xl md:text-4xl text-zinc-100 tracking-tight mb-1">
            ${item.latinName}
          </h3>
          <p class="text-sm font-sans font-medium text-amber-200/90 mb-4">
            ${nakshatraName} · <span class="text-zinc-400">${meaning}</span>
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div class="glass-pill p-3 rounded-xl">
              <span class="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">${t.anchorStars}</span>
              <span class="text-sm font-sans text-zinc-200">${keyStars}</span>
            </div>
            <div class="glass-pill p-3 rounded-xl">
              <span class="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">${t.viewingWindow}</span>
              <span class="text-sm font-sans text-zinc-200">${bestVis}</span>
            </div>
          </div>

          <div class="glass-pill p-3 rounded-xl mb-4">
            <span class="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">${t.deepSkyTargets}</span>
            <span class="text-sm font-sans text-zinc-200">${treasures}</span>
          </div>
        </div>

        <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span>${t.iauDesignation}</span>
          <span class="text-zinc-300">${t.iauStandard}</span>
        </div>
      </div>
    `;
  }

  function initConstellationExplorer() {
    dom.constellationCards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-constellation-id');
        dom.constellationCards.forEach(c => {
          c.classList.remove('ring-white/40', 'bg-white/10');
          c.classList.add('ring-white/10', 'bg-white/5');
        });
        card.classList.add('ring-white/40', 'bg-white/10');
        renderConstellationDetail(id);
      });
    });

    renderConstellationDetail('orion');
  }

  /* ==========================================================================
     11. TELEMETRY LIGHTBOX MODAL & INTERACTIVE SPECTROGRAPH
     ========================================================================== */
  function populateModalContent(objectId) {
    const item = CELESTIAL_CATALOG.find(x => x.id === objectId);
    if (!item) return;

    const isMy = state.lang === 'my';
    const itemName = isMy ? item.name.my : item.name.en;
    const itemSubtype = isMy ? item.subtype.my : item.subtype.en;
    const itemConst = isMy ? item.constellation.my : item.constellation.en;
    const itemDesc = isMy ? item.description.my : item.description.en;
    const itemDist = isMy ? item.distanceFormatted.my : item.distanceFormatted.en;
    const itemDiameter = isMy ? item.diameter.my : item.diameter.en;
    const itemDiscovered = isMy ? item.discoveredBy.my : item.discoveredBy.en;
    const itemInstruments = isMy ? item.instruments.my : item.instruments.en;
    const itemBestSeason = isMy ? item.bestSeason.my : item.bestSeason.en;
    const itemEquipment = isMy ? item.equipment.my : item.equipment.en;

    if (dom.modalCatalog) dom.modalCatalog.textContent = item.catalog;
    if (dom.modalName) dom.modalName.textContent = itemName;
    if (dom.modalSubtypeBadge) dom.modalSubtypeBadge.textContent = itemSubtype;
    if (dom.modalConstellationBadge) dom.modalConstellationBadge.textContent = itemConst;
    if (dom.modalDescription) dom.modalDescription.textContent = itemDesc;

    if (dom.modalRa) dom.modalRa.textContent = item.ra;
    if (dom.modalDec) dom.modalDec.textContent = item.dec;
    if (dom.modalDistance) dom.modalDistance.textContent = itemDist;
    if (dom.modalMagnitude) dom.modalMagnitude.textContent = item.apparentMagnitude.toString();
    if (dom.modalDimensions) dom.modalDimensions.textContent = item.apparentDimensions;
    if (dom.modalDiameter) dom.modalDiameter.textContent = itemDiameter;
    if (dom.modalDiscovered) dom.modalDiscovered.textContent = itemDiscovered;
    if (dom.modalInstruments) dom.modalInstruments.textContent = itemInstruments;
    if (dom.modalBestSeason) dom.modalBestSeason.textContent = itemBestSeason;
    if (dom.modalEquipment) dom.modalEquipment.textContent = itemEquipment;
  }

  function openTelemetryModal(objectId, triggerElement = null) {
    const item = CELESTIAL_CATALOG.find(x => x.id === objectId);
    if (!item || !dom.telemetryModal) return;

    state.selectedObjectId = objectId;
    state.modalActiveSpectrum = 'visible';
    state.lastFocusedElement = triggerElement || document.activeElement;

    if (dom.modalImage) {
      dom.modalImage.src = item.image;
      dom.modalImage.alt = state.lang === 'my' ? item.name.my : item.name.en;
    }

    populateModalContent(objectId);

    dom.modalSpectrumToggleBtns.forEach(btn => {
      const mode = btn.getAttribute('data-modal-spectrum');
      const isVisible = mode === 'visible';
      btn.classList.toggle('bg-white', isVisible);
      btn.classList.toggle('text-zinc-950', isVisible);
      btn.classList.toggle('text-zinc-300', !isVisible);
    });

    dom.telemetryModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      if (dom.modalBackdrop) dom.modalBackdrop.classList.remove('opacity-0');
      if (dom.modalPanel) {
        dom.modalPanel.classList.remove('opacity-0', 'scale-95');
        dom.modalPanel.classList.add('opacity-100', 'scale-100');
      }
      if (dom.modalCloseBtn) dom.modalCloseBtn.focus();
    });

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function closeTelemetryModal() {
    if (!dom.telemetryModal || dom.telemetryModal.classList.contains('hidden')) return;

    if (dom.modalBackdrop) dom.modalBackdrop.classList.add('opacity-0');
    if (dom.modalPanel) {
      dom.modalPanel.classList.remove('opacity-100', 'scale-100');
      dom.modalPanel.classList.add('opacity-0', 'scale-95');
    }

    setTimeout(() => {
      dom.telemetryModal.classList.add('hidden');
      document.body.style.overflow = '';
      if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === 'function') {
        state.lastFocusedElement.focus();
      }
    }, 280);
  }

  function setModalSpectrum(spectrumMode) {
    const item = CELESTIAL_CATALOG.find(x => x.id === state.selectedObjectId);
    if (!item || !dom.modalImage) return;

    state.modalActiveSpectrum = spectrumMode;

    dom.modalSpectrumToggleBtns.forEach(btn => {
      const isTarget = btn.getAttribute('data-modal-spectrum') === spectrumMode;
      btn.classList.toggle('bg-white', isTarget);
      btn.classList.toggle('text-zinc-950', isTarget);
      btn.classList.toggle('text-zinc-300', !isTarget);
    });

    dom.modalImage.style.filter = 'brightness(0.6) blur(2px)';
    setTimeout(() => {
      if (spectrumMode === 'infrared') {
        dom.modalImage.src = item.imageInfrared;
        dom.modalImage.style.filter = 'hue-rotate(25deg) contrast(1.15) brightness(1.05)';
      } else if (spectrumMode === 'xray') {
        dom.modalImage.src = item.image;
        dom.modalImage.style.filter = 'invert(0.1) hue-rotate(180deg) saturate(1.8) contrast(1.3)';
      } else {
        dom.modalImage.src = item.image;
        dom.modalImage.style.filter = 'none';
      }
    }, 150);
  }

  function copyCoordinates() {
    const item = CELESTIAL_CATALOG.find(x => x.id === state.selectedObjectId);
    if (!item) return;

    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;
    const itemName = state.lang === 'my' ? item.name.my : item.name.en;
    const coordsText = `${itemName} (${item.catalog}): RA ${item.ra}, Dec ${item.dec} [Epoch J2000.0]`;
    
    navigator.clipboard.writeText(coordsText).then(() => {
      showToast(t.toastCopied);
    }).catch(() => {
      showToast(`RA: ${item.ra} | Dec: ${item.dec}`);
    });
  }

  function showToast(message) {
    if (!dom.copyToast) return;
    dom.copyToast.textContent = message;
    dom.copyToast.classList.remove('opacity-0', 'translate-y-2');
    dom.copyToast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      dom.copyToast.classList.remove('opacity-100', 'translate-y-0');
      dom.copyToast.classList.add('opacity-0', 'translate-y-2');
    }, 2400);
  }

  function initModalEvents() {
    if (dom.modalCloseBtn) {
      dom.modalCloseBtn.addEventListener('click', closeTelemetryModal);
    }

    if (dom.modalBackdrop) {
      dom.modalBackdrop.addEventListener('click', closeTelemetryModal);
    }

    dom.modalSpectrumToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-modal-spectrum');
        setModalSpectrum(mode);
      });
    });

    if (dom.copyCoordsBtn) {
      dom.copyCoordsBtn.addEventListener('click', copyCoordinates);
    }
  }

  /* ==========================================================================
     12. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  function toggleMobileMenu() {
    if (!dom.mobileNavDrawer) return;
    const isHidden = dom.mobileNavDrawer.classList.contains('hidden');
    
    if (isHidden) {
      dom.mobileNavDrawer.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      if (dom.mobileMenuBtn) {
        dom.mobileMenuBtn.setAttribute('aria-expanded', 'true');
      }
    } else {
      dom.mobileNavDrawer.classList.add('hidden');
      document.body.style.overflow = '';
      if (dom.mobileMenuBtn) {
        dom.mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  }

  function closeMobileMenu() {
    if (dom.mobileNavDrawer && !dom.mobileNavDrawer.classList.contains('hidden')) {
      dom.mobileNavDrawer.classList.add('hidden');
      document.body.style.overflow = '';
      if (dom.mobileMenuBtn) {
        dom.mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  }

  function initMobileMenu() {
    if (dom.mobileMenuBtn) {
      dom.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    dom.mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  /* ==========================================================================
     13. GLOBAL ACCESSIBILITY & KEYBOARD HANDLERS
     ========================================================================== */
  function initKeyboardHandlers() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeTelemetryModal();
        closeMobileMenu();
      }
    });
  }

  /* ==========================================================================
     14. INITIALIZATION ROUTINE
     ========================================================================== */
  function init() {
    initLanguageSwitcher();
    initWavelengthSwitcher();
    initGalleryEvents();
    initConstellationExplorer();
    initModalEvents();
    initMobileMenu();
    initKeyboardHandlers();

    // Set initial language from state
    setLanguage(state.lang);

    // Initial wavelength preset
    setWavelength('visible');

    // Clocks
    updateCelestialClocks();
    setInterval(updateCelestialClocks, 1000);

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
