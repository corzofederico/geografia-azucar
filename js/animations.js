const $=(el)=>document.querySelector(el)
const speed = 100//menos es mas rapido
const windowW=window.innerWidth
//canas
let canasEx=false
const canaW=25//width de una cana
const spaceW=5//gap x cana
const totalC=(windowW/canaW)-(windowW/(canaW*spaceW))+1//total de canas calculadas que entran en pantalla
const timeA=5000//tiempo de animacion del camion

const animatedCounter = (metric) => {
    const el=$(`.number[data-name='${metric.name}']`)
    const target = parseInt(+metric.number)//final
    const count = parseInt(+el.innerText)//numero actual
    const increment = Math.ceil(target/speed)//redondea
    if (count < target){//verifica si el numero actual no es el final
        //el.innerText = count+1
        el.innerText = count+increment
        setTimeout(()=>{
            animatedCounter(metric)
        },50)
    }else count.innerText=target
}
const animatedSection = (section) => {
    const el=$(`.section[data-name='${section.name}']`)
    el.classList.add('fade')
}
const animatedCosecha=(etapa)=>{
    const cosecha=$(`.etapa[data-name='${etapa.name}']`)
    const canas=cosecha.querySelector('.cana')
    const timeAC=200//tiempo en agregarse una cana
    for(var i=0;i<totalC;i++){//agregar las canas
        const cana=document.createElement("img")
        cana.src="./images/cana.svg"
        cana.style.transform=`scaleX(${(Math.floor(Math.random() * 2)==0)?"1":"-1"})`
        setTimeout(()=>{
            canas.appendChild(cana)
        },(timeAC*i))
    }
    setTimeout(()=>{//esperar a q se agregen todas las canas
        const timeC=(timeA/totalC)//tiempo calculado x cada cana
        cosecha.classList.add('anim')
        for (let i = 0; i < canas.children.length;i++){
            const cana=canas.childNodes[i]
            setTimeout(()=>{//sincronizar el cambio de imagen, con el paso del camion
                cana.src="https://cdn.pixabay.com/photo/2012/04/26/11/50/cane-42264_960_720.png"
            },(timeC*i))
        }
        setTimeout(()=>{//cuando pase el camion
            cosecha.classList.add('done')
        },timeA)
    },(timeAC*totalC))
}
const animatedEntrada=(etapa)=>{
    const entrada=$(`.etapa[data-name='${etapa.name}']`)
    entrada.classList.add('anim')
    setTimeout(()=>{//cuando pase el camion
        entrada.classList.add('done')
    },(5000+500))
}
const animatedMolienda=(etapa)=>{
    const molienda=$(`.etapa[data-name='${etapa.name}']`)
    molienda.classList.add('anim')
    setTimeout(()=>{
        molienda.classList.add('done')
    },(6000+500))
}
const animatedMoliendaBagazoEnergia=(etapa)=>{
    const moliendaBagazoEnergia=$(`.etapa[data-name='${etapa.name}']`)
    moliendaBagazoEnergia.classList.add('anim')
}
const animatedClarificacion=(etapa)=>{
    const clarificacion=$(`.etapa[data-name='${etapa.name}']`)
    clarificacion.classList.add('anim')
    setTimeout(()=>{
        clarificacion.querySelector('.frasco').src="./images/frasco_celeste.png"
    },(4500/2))
    setTimeout(()=>{
        clarificacion.classList.add('done')
    },(4500+500))//500 delay
}

const metrics=[
    {name:'tempMin',number:10,executed:false},
    {name:'tempIdeal',number:28,executed:false},
    {name:'tempMax',number:50,executed:false},
    {name:'rainMin',number:700,executed:false},
    {name:'rainMax',number:2000,executed:false},
]
const sections=[
    {name:'desc',executed:false},
    {name:'production',executed:false},
    {name:'map',executed:false},
    {name:'dataExtraReqProd',executed:false},
    {name:'laboresCosecha',executed:false},
    {name:'cosecha',executed:false},
    {name:'entrada',executed:false},
    {name:'molienda',executed:false},
    {name:'clarificacion',executed:false},
    {name:'evaporacion',executed:false},
    {name:'cristalizacion',executed:false},
    {name:'separacion',executed:false},
    {name:'refinado',executed:false},
    {name:'secado',executed:false},
    {name:'situationArg',executed:false},
    //{name:'situationGlobal',executed:false},
    {name:'links',executed:false}
]
const etapas=[
    {name:'cosecha',executed:false,action:animatedCosecha},
    {name:'entrada',executed:false,action:animatedEntrada},
    {name:'molienda',executed:false,action:animatedMolienda},
    {name:'moliendaBagazoEnergia',executed:false,action:animatedMoliendaBagazoEnergia},
    {name:'clarificacion',executed:false,action:animatedClarificacion},
]
const links=[
    'https://www.clubensayos.com/Ciencia/La-producci%C3%B3n-de-ca%C3%B1a-de-az%C3%BAcar-en-la/5347666.html',
    'https://www.sinavimo.gob.ar/cultivo/saccharum-officinarum',
    'https://www.youtube.com/watch?v=HVhDBlPIyC8',
    'https://news.agrofy.com.ar/noticia/198451/azucar-argentina-quien-es-quien-negocio-que-genera-mas-1000-millones-dolares-cada-ano',
    'https://centroazucarero.com.ar/quienes-somos-2/',
    'http://www.mag.go.cr/bibliotecavirtual/F01-0658cana.pdf'
]

window.addEventListener('scroll',function() {
    var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0

    metrics.map((metric,i)=>{
        const el=$(`.number[data-name='${metric.name}']`)
        const coord=el.offsetTop-el.offsetHeight-(window.innerHeight/1.1)//mientras mas grande n(windowH/n), mas cerca tenes q estar

        if(scrollTop >= coord && metrics[i].executed!==true){
            metrics[i].executed=true
            animatedCounter(metric)
        }
    })
    sections.map((section,i)=>{
        const el=$(`.section[data-name='${section.name}']`)
        // const coord=el.offsetTop-(el.offsetHeight*1.5)
        const coord=el.offsetTop-el.offsetHeight-(window.innerHeight/2)

        if(scrollTop >= coord && sections[i].executed!==true){
            sections[i].executed=true
            animatedSection(section)
        }
    })
    etapas.map((etapa,i)=>{
        const el=$(`.etapa[data-name='${etapa.name}']`)
        // const el=$(`.${etapa.name}`)
        const coord=el.offsetTop-el.offsetHeight-(window.innerHeight/2)

        if(scrollTop >= coord && etapa.executed!==true){
            etapas[i].executed=true
            etapa.action(etapa)
        }
    })
})
function scrollDown(){
    window.scrollTo({
        top:$('.header').offsetHeight,
        behavior:"smooth"
    })
}

$('.etapa[data-name="cosecha"] > .done > .repeat').addEventListener('click',function(){
    const etapa=etapas[0]
    const el=$(`.etapa[data-name='${etapa.name}']`)
    el.classList.remove('anim')
    el.classList.remove('done')
    el.querySelector('.cana').innerHTML=''
    etapa.action(etapa)
})
$('.etapa[data-name="entrada"] > .done > .repeat').addEventListener('click',function(){
    const etapa=etapas[1]
    const el=$(`.etapa[data-name='${etapa.name}']`)
    el.classList.remove('anim')
    el.classList.remove('done')
    setTimeout(()=>{etapa.action(etapa)},100)
})
$('.etapa[data-name="molienda"] > .done > .repeat').addEventListener('click',function(){
    const etapa=etapas[2]
    const el=$(`.etapa[data-name='${etapa.name}']`)
    el.classList.remove('anim')
    el.classList.remove('done')
    setTimeout(()=>{etapa.action(etapa)},100)
})
$('.etapa[data-name="clarificacion"] > .done > .repeat').addEventListener('click',function(){
    const etapa=etapas[3]
    const el=$(`.etapa[data-name='${etapa.name}']`)
    el.querySelector('.frasco').src="./images/maleza.png"
    el.classList.remove('anim')
    el.classList.remove('done')
    setTimeout(()=>{etapa.action(etapa)},100)
})
links.map((url)=>{
    const link=document.createElement("a")
    link.href=url
    link.innerText=url
    $('#links').appendChild(link)
})