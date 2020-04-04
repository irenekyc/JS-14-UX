const filterContainer = document.querySelector('.filter-container')
const areaSubCat = document.getElementById('country-sub-cat')
const subCatContainer = document.querySelectorAll('.sub-cat-div')
let photos = []
const photoGallery = document.querySelector('.photo-gallery-container')
let tagHTML = ""
let outphotoHTML
/////////////////////Modal ///////////////////////////
let subscribeCount = false
const welcomeMsg = ()=>{
    if (!subscribeCount){
        openModal('welcomeModal')
}
}

//////////////// Retention //////////////////////

window.addEventListener('mousemove', (e)=>{
    if (e.y<5 && !subscribeCount){
        openModal('subModal')
        subscribeCount =true
    }
})

const openModal = (modal)=>{
    document.querySelector('.modal').style.display="block"
    const modalName= document.querySelector(`.${modal}`)
    modalName.style.opacity="1"
    modalName.style.width="375px"
    modalName.style.height="300px"
    modalName.addEventListener('click', (e)=>{
        if (e.target.id === "close-modal"){
            closeModal(modalName)
        }
    })
    
}
const closeModal = (modalName) =>{
    document.querySelector('.modal').style.display="none"
    modalName.style.opacity="0"
    modalName.style.width="0"
    modalName.style.height="0"
}

/////////////////Switch and Search //////////////
const switchSearch = document.querySelector('.search-mode-container')
const darkMode = document.getElementById('switch')

window.addEventListener('keydown', (e)=>{
    const searchKeyWords = document.getElementById('searchID').value.toLowerCase()
    if (e.keyCode == 13 && searchKeyWords.length >1 ){
        foundImages = filterPhotos(searchKeyWords)
        displayImages(foundImages)
    }
})
switchSearch.addEventListener('click', (e)=>{
    if(e.target.id === "searchBtn"){
        const searchKeyWords = document.getElementById('searchID').value.toLowerCase()
        foundImages = filterPhotos(searchKeyWords)
        displayImages(foundImages)
    }
    if (darkMode.checked) {
        document.body.style.background="#243447"
        document.querySelector('.web-container').style.background="#c51f5d"
        document.querySelector('.header').style.background="#c51f5d"
    } else if (!darkMode.checked) {
        document.body.style.background="#ffffff"
        document.querySelector('.web-container').style.background="#FFEDEC"
        document.querySelector('.header').style.background="#ffffff"
    }

})





photos.push({
    id: 31,
    tag: "#berlin #europe #city",
    src: "images/Berlin1.jpg"
})
photos.push({
    id: 1,
    tag: "#berlin #europe #city",
    src: "images/Berlin2.png"
})
photos.push({
    id: 2,
    tag: "#berlin #europe #city",
    src: "images/Berlin3.jpg"
})
photos.push({
    id: 3,
    tag: "#americas #mountain",
    src: "images/Cali1.jpg"
})
photos.push({
    id: 4,
    tag: "#asia #hong kong #city",
    src: "images/HK1 copy.jpg"
})
photos.push({
    id: 5,
    tag: "#asia #hong kong #city",
    src: "images/HK2.jpg"
})
photos.push({
    id: 6,
    tag: "#asia #hong kong #city",
    src: "images/HK3.png"
})
photos.push({
    id: 7,
    tag: "#asia #hong kong #city",
    src: "images/HK4.jpg"
})
photos.push({
    id: 8,
    tag: "#asia #japan #city",
    src: "images/JP1.png"
})
photos.push({
    id: 9,
    tag: "#asia #japan #city",
    src: "images/JP2.png"
})
photos.push({
    id: 10,
    tag: "#asia #japan #city",
    src: "images/JP3.jpg"
})
photos.push({
    id: 11,
    tag: "#asia #japan #city",
    src: "images/JP4.jpg"
})
photos.push({
    id: 12,
    tag: "#europe #london #city",
    src: "images/London1.jpg"
})
photos.push({
    id: 13,
    tag: "#europe #london #city",
    src: "images/London2.jpg"
})
photos.push({
    id: 14,
    tag: "#europe #london #city",
    src: "images/London3.jpg"
})
photos.push({
    id: 15,
    tag: "#europe #london #city",
    src: "images/London4.jpg"
})
photos.push({
    id: 16,
    tag: "#australia #city",
    src: "images/Mel1.jpg"
})
photos.push({
    id: 17,
    tag: "#australia #nature",
    src: "images/Mel2.jpg"
})
photos.push({
    id: 18,
    tag: "#australia #city",
    src: "images/Mel3.jpg"
})
photos.push({
    id: 19,
    tag: "#americas #city",
    src: "images/NYC1.jpg"
})
photos.push({
    id: 20,
    tag: "#americas #city",
    src: "images/NYC2.jpg"
})
photos.push({
    id: 21,
    tag: "#americas #city",
    src: "images/NYC3.png"
})
photos.push({
    id: 22,
    tag: "#australia #city",
    src: "images/Sydney1.jpg"
})
photos.push({
    id: 23,
    tag: "#australia #city",
    src: "images/Sydney2.jpg"
})
photos.push({
    id: 24,
    tag: "#australia #beach",
    src: "images/Sydney3.jpg"
})
photos.push({
    id: 25,
    tag: "#beach",
    src: "images/Misc1.jpg"
})
photos.push({
    id: 26,
    tag: "#travel-essential",
    src: "images/Misc2.jpg"
})
photos.push({
    id: 27,
    tag: "#beach",
    src: "images/Misc4.jpg"
})
photos.push({
    id: 28,
    tag: "#mountain",
    src: "images/Misc3.jpg"
})
photos.push({
    id: 29,
    tag: "#beach #family",
    src: "images/Misc5.jpg"
})
photos.push({
    id: 30,
    tag: "#beach",
    src: "images/Misc10.jpg"
})


let foundImages = []
filterContainer.addEventListener('click', (e)=>{
    if(e.target.classList.value === "main-cat"){
        if (e.target.id === "travel-essential"){
            foundImages = filterPhotos(e.target.id)
            return displayImages(foundImages)
        }
        if (e.target.id === "show-all"){
           displayImages(photos)
        }
        subCatContainer.forEach((e)=>{
            e.style.display="none"
        })
        const clickFilter = e.target.id
        document.querySelector(`.${clickFilter}`).style.display="block"
        
    }
    if(e.target.classList.value === "sub-filter"){
        const clickSubFilter = (e.target.id).toString()
        console.log(clickSubFilter)
        foundImages = filterPhotos(clickSubFilter)
        displayImages(foundImages)
    

      
    }
})

const filterPhotos = (filter)=>{
    return photos.filter((photo)=>{
       return photo.tag.includes(filter)
   })

}


const displayImages = (photos)=>{
    photoGallery.innerHTML=" "
    if (photos.length == 0) {
        return photoGallery.innerHTML="<h3> No photo can be found. Please try again. </h3>"
    }
    photos.forEach((photo)=>{
    
         outputPhotoHTML = ` <div class="photo-card">
        <div class="photo-container">
            <img class="photo" src="${photo.src}" alt="Beach" data-tag="${photo.tag}">
        </div> 
           <div class="photo-description">
           <span id="photo-tag-container"> ${photo.tag} </span>
        </div>
    </div>`
    photoGallery.insertAdjacentHTML('afterbegin', outputPhotoHTML)
    document.querySelector('.photo-card').classList.add('fadeIn')
    })
   
}


displayImages(photos);
setTimeout (welcomeMsg, 5000)