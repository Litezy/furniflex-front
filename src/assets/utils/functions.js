import toast from "react-hot-toast"

export const formatter = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits:0
   })


  export const headers = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Products',
        url: '/products'
    },
    {
        title: 'About Us',
        url: '/about'
    },
    {
        title: 'Contact Us',
        url: '/contact'
    },
    {
        title: 'Blogs',
        url: '/blogs'
    },
    {
        title: 'Dashboard',
        url: '/dashboard'
    },
]

export const MoveToBottom = ()=>{
    const div = document.querySelector('.divs')
    if(div){
        div.scrollTo({
            top:div.scrollHeight,
            behavior:'smooth'
        })
    }
}
export const MoveToTop= () =>{
    const div = document.querySelector('.updiv')
    if(div){
        div.scrollTop =0
    }
}

export const categories = ['Bedroom','Living Room','Office','Kitchen','Outdoor','Decor']
export const martial = ['Cloth','Wood','Upholstered','Glass','Plastic','Rattan']
export const colors = ['Brown','Orange','Grey','Black','Blue','White','Green','Red']
export const avail = ['In stock', 'Out of stock']
export const cartHeaders = [
    'Product','Price','Quantity','SubTotal'
]


export const errorMessage = (message) => {
    return toast.error(message, {
        duration: 4000,
        position: "top-center"
    })
}
export const successMessage = (message) => {
    return toast.success(message, {
        duration: 4000,
        position: "top-center",
        
    })
}

const dashMainHeaders = [
    {
        title:'Dashboard',
        icons:''
    },
    {
        title:'Products',
        icons:''
    },
    {
        title:'Customer',
        icons:''
    },
    {
        title:'Order',
        icons:''
    },
    {
        title:'Marketing',
        icons:''
    },
]
const dashCommsHeaders = [
    {
        title:'Chat',
        icons:''
    },
    {
        title:'Inbox',
        icons:''
    },
    
]
const dashFeaturesHeaders = [
    {
        title:'File Manager',
        icons:''
    },
    {
        title:'Calendar',
        icons:''
    },
    {
        title:'Analytics',
        icons:''
    },
    
]