/* let url="https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.12/download/provincias.geojson"

fetch(
  url,
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(e=>console.log("error",e)) */
let provs=[
    {
        id:"muyApto",
        name:"Muy apto",
        desc:"Muy apto, en especial para variedades de ciclo corto.",
        zones:"Ocupa la provincia de la Rioja y el oeste de salta.",
        color:"rgb(0, 138, 63)",
        coord:[[
            [-64.991419,-22.061337],
            [-65.196345,-23.264359],
            [-65.857143,-24.915270],
            [-66.135373,-26.264023],
            [-66.701274,-26.808621],
            [-66.000348,-27.753786],
            [-65.202742,-27.946119],
            [-64.646836,-27.518250],
            [-64.356797,-26.722300],
            [-64.429307,-25.942481],
            [-64.743515,-25.266801],
            [-64.646836,-24.323322],
            [-64.429307,-23.683015],
            [-63.970080,-23.128492],
            [-63.704211,-22.079792],
            [-63.709169,-21.999616],
            [-63.950991,-21.994980],
            [-64.325809,-22.857568],
            [-64.552860,-22.264415]
        ]]
    },
    {
        id:"dept",
        name:"Apto con riego",
        desc:"Dependiente de la disponibilidad del agua.\nAdemas la zona norte tiene grandes limitaciones termicas.",
        zones:"Ocupa la provincia de Tucumán, el sudoeste de Jujuy y el oeste de Salta.",
        color:"rgb(0, 201, 218)",//rgb(24, 112, 176)
        coord:[[
            [-63.659885,-21.992581],
            [-63.704211,-22.079792],
            [-63.970080,-23.128492],
            [-64.429307,-23.683015],
            [-64.646836,-24.323322],
            [-64.743515,-25.266801],
            [-64.429307,-25.942481],
            [-64.356797,-26.722300],
            [-64.646836,-27.518250],
            [-65.202742,-27.946119],
            [-66.000348,-27.753786],
            [-66.701274,-26.808621],
            [-66.683269,-26.800917],
            [-67.693363,-27.556868],
            [-68.668691,-27.872353],
            [-69.025061,-28.582952],
            [-69.118843,-29.157828],
            [-69.006305,-30.135865],
            [-68.574910,-31.056114],
            [-68.162271,-32.158291],
            [-67.280725,-32.427829],
            [-65.705195,-31.919799],
            [-64.861161,-30.038490],
            [-64.804892,-29.484895],
            [-64.242203,-28.434614],//santiago dl e
            [-63.698270,-25.982813],//
            [-62.310303,-24.421559],//lim wt aptlimnotw
            [-61.466269,-23.375538],
            [-62.816723,-22.043307]
        ]]
    },
    {
        id:"aptLimitTerm",
        name:"Apto con limitantes termicas",
        desc:"Sin problema de agua",
        zones:"Ocupa casi toda la provincia de Misiones y el norte de Entre Rios.",
        color:"rgb(235, 226, 0)",
        coord:[
            [
                [-58.214843,-27.271594],//lim NO(top-left)
                [-55.890608,-27.336409],
                [-55.370498,-26.964159],
                [-54.651372,-26.267669],
                [-54.651372,-25.566975],
                [-54.022137,-25.539942],
                [-53.692538,-26.240796],
                [-53.692538,-26.937449],
                [-54.445448,-27.425241],//lim SE(bottom-right)
                [-55.141633,-27.429407],//lim bottom-center-right
                [-56.997776,-28.244843],//lim bottom-center-left
                [-58.369193,-28.265671],//lim SO(bottom-left)
            ]
        ]
    },
    {
        id:"aptLimitTermWater",
        name:"Apto con limitantes termicas e hidricas",
        desc:"",
        zones:"Ocupa la provincia de Formosa y el norte de Chaco.",
        color:"rgb(250, 180, 0)",
        coord:[
            [
                [-57.552169,-25.442686],
                [-58.637025,-27.068888],//lim SE(bottom-right)
                [-60.203321,-26.463722],//lim bottom-center
                [-62.509693,-24.623000],//lim SO(bottom-left)
                [-61.466269,-23.375538]
            ]
        ]
    },
    {
        id:"aptwlimRaciacion",
        name:"Apto con limitantes de raciacion",
        desc:"Sin limitaciones hidricas.",
        zones:"Ocupa la provincia de Corrientes, gran parte de Entre Ríos y el sur de Misiones.",
        color:"rgb(196, 123, 51)",
        coord:[
            [
                [-58.623638,-27.310916],//lim esquina rio Corrientes
                [-58.214843,-27.271594],//lim top-left
                [-58.369193,-28.265671],//lim top-bottom-left
                [-56.997776,-28.244843],//lim top bottom-center-left
                [-55.141633,-27.429407],//lim top bottom-center-right
                [-54.445448,-27.425241],//lim top SE(bottom-right)
                [-57.924927,-31.239127],//lim SE(bottom-right)
                [-59.670117,-30.527320]//lim SO(bottom-left) rio Entre Rios y Santa Fe
            ]
        ]
    },
    {
        id:"aptwlimRacHidr",
        name:"Apto con limitantes de raciacion e hidricas",
        desc:"Esta zona tiene limitaciones hidricas, requiere siego suplementario.",
        zones:"Ocupa la provincia de Chaco, el norte de Santa Fe y el este de Santiago del Estero",
        color:"rgb(196, 51, 51)",
        coord:[
            [
                [-62.509693,-24.623000],//lim top-left
                [-60.203321,-26.463722],//lim top-center
                [-58.637025,-27.068888],//lim top-right
                [-58.623638,-27.310916],//lim esquina rio Corrientes
                [-59.670117,-30.527320],//lim SE(bottom-right) rio Entre Rios y Santa Fe
                [-61.695308,-29.967315],//lim bottom-center-right
                [-62.933225,-29.298891],//lim bottom-center-left
                [-64.242203,-28.434614],//lim SO(bottom-left)
                [-63.698270,-25.982813]//lim O(left-center)
            ]
        ]
    }
]