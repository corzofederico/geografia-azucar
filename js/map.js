mapboxgl.accessToken = 'pk.eyJ1IjoiZmVkZXJpY29jb3J6byIsImEiOiJja2wzczVyaXEwdXpnMnFxajVzcWljZG0zIn0.K8mwD8hJ9vSIk372QY1aAg';
const mapCenter=[-62,-27.5]//meridianos,paralelos
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: mapCenter,
    zoom: 3.5,
    touchZoomRotate: {around: 'center'},
    scrollZoom: {around: 'center'},
    maxZoom: 5,
    minZoom: 3
});
map.dragPan.disable();
map.dragRotate.disable();
map.on('load',()=>{
    provs.map(({id,name,desc,zones,color,coord},i)=>{
        map.addSource(id,{
            'type': 'geojson',
            "data":{
                "id":id,
                "type":"Feature",
                "properties":{
                    "name":name,
                    "desc":desc,
                    "zones":zones
                },
                "geometry":{
                    "type":"MultiPolygon",
                    "coordinates":[coord.map(c=>c)]
                }
            }
        });
        map.addLayer({
            'id':id,
            'type': 'fill',
            'source': id,
            'layout': {},
            'paint': {
                'fill-color':color,
                'fill-opacity':.7
            }
        });

        map.on('mouseenter',id,()=>mouseenter(id))
        map.on('mouseleave',id,()=>mouseleave(id))
        map.on('click',id,()=>clickRef(i))
    })
})
//refs
provs.map(({id,name,desc,zones,color,coord},i)=>{
    const refApt=document.getElementById("refApt")

    const ref=document.createElement("div")
    ref.addEventListener('mouseenter',()=>mouseenter(id))
    ref.addEventListener('mouseleave',()=>mouseleave(id))
    ref.addEventListener('click',()=>clickRef(i))

    const colorDiv=document.createElement("div")
    colorDiv.classList.add('color')
    colorDiv.style.backgroundColor=color

    const b=document.createElement("b")
    b.innerText=name

    const icon=document.createElement("i")
    icon.classList.add('fas')
    icon.classList.add('fa-chevron-right')

    ref.appendChild(colorDiv)
    ref.appendChild(b)
    ref.appendChild(icon)

    refApt.appendChild(ref)
})
//clickRef
function mouseenter(id){
    map.setPaintProperty(id,'fill-opacity',1);
    /* const coord=[provs[i].coord.map(c=>c)]
    map.flyTo({center:coord}) */
}
function mouseleave(id){
    map.setPaintProperty(id,'fill-opacity',.7);
    //map.flyTo({center:mapCenter})
}
function clickRef(i){
    const prov=provs[i]
    $('#clickRef').style.display="grid"
    $('#clickRef > div > div > .title').innerText=prov.name
    $('#clickRef > div > .desc').innerText=prov.desc
    $('#clickRef > div > .zonas').innerText=prov.zones
    $('#clickRef > div > hr').style.backgroundColor=prov.color
}
$('#clickRef > div > div > .fa-times').addEventListener('click',()=>{
    $('#clickRef').style.display="none"
})