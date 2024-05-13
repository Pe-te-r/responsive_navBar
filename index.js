const features=document.getElementById('features')
const company =document.getElementById('company')

const hidden_features=document.getElementById('hidden_features')
const hidden_company_details=document.getElementById("hidden_company_details")

features.addEventListener("click",()=>{
    hidden_features.classList.toggle("active")

})

company.addEventListener("click",()=>{
    hidden_company_details.classList.toggle("active")
})