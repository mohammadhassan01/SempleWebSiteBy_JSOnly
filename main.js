//=========================================
//=========== > Create Header < ===========
//=========================================
let header = document.createElement("div")
let logo = document.createElement("h3")
let groupOfLinks = document.createElement("ul")
let linksValue = ["Home", "About", "Service", "Contact"]
// Add Elements To The Header Div
document.body.appendChild(header)
header.appendChild(logo)
header.appendChild(groupOfLinks)

// Add The Content To The ELement

logo.innerText = "Khater"
for (let i = 0; i < linksValue.length; i++) {
  const linkList = document.createElement("li")
  const links = document.createElement("a")
  groupOfLinks.appendChild(linkList)
  linkList.appendChild(links)
  links.innerText = `${linksValue[i]}`

  //Styling The Element
  linkList.style.listStyleType = "none"
  linkList.style.alignContent = "center"
  links.style.padding = "10px"
  links.style.textAlign = "center"
  links.style.cursor = "pointer"
  links.setAttribute("href", "https://google.com")
  links.style.textDecoration = "none"
  links.style.color = "black"

  const link = document.querySelectorAll("a")
  link.forEach((ele) => {
    ele.style.backgroundColor = "#f7f7f7"

    ele.onmouseover = function () {
      this.style.backgroundColor = "#e3e6ea"
    }

    ele.onmouseout = function () {
      this.style.backgroundColor = "#f7f7f7"
    }
  })
}

//Styling The Element
document.body.style.margin = 0
header.style.backgroundColor = "#f7f7f7"
header.style.borderBottom = "1px solid #dcdcdc"
header.style.display = "flex"
header.style.padding = "5px"
header.style.justifyContent = "space-between"
document.body.style.fontFamily = "Arial"
header.style.position = "sticky"
header.style.top = "0px"

logo.style.height = "50px"
logo.style.color = "#0079c4"
logo.style.fontWeight = "800"
logo.style.margin = "0px"
logo.style.textAlign = "center"
logo.style.alignContent = "center"
logo.style.fontSize = "24px"
groupOfLinks.style.padding = "0"
groupOfLinks.style.margin = "0"
groupOfLinks.style.display = "flex"

//======================================
//=========== > End Header < ===========
//======================================

//=======================================
//========= > Start Container < =========
//=======================================

const container = document.createElement("div")
container.className = "content"
document.body.appendChild(container)

for (let i = 1; i <= 15; i++) {
  let product = document.createElement("div")
  container.appendChild(product)
  product.className = "product"
  let span = document.createElement("span")
  product.appendChild(span)
  container.style.display = "grid"
  container.style.gap = "20px"
  container.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))"
  container.style.padding = "10px"
  container.style.backgroundColor = "#e7e3e3"

  span.innerHTML = `${i}`
  span.style.fontSize = "40px"
  span.style.display = "block"
  span.style.color = "black"
  product.style.backgroundColor = "#fff"
  product.style.color = "#a8a8a8"
  product.append(`Product`)
  product.style.padding = "20px 50px"
  product.style.textAlign = "center"
}

//=====================================
//========= > End Container < =========
//=====================================

const footer = document.createElement("div")
document.body.appendChild(footer)
document.body.style.position = "relative"
footer.append("Copyright 2026")
footer.style.backgroundColor = "red"
footer.style.textAlign = "center"
footer.style.padding = "15px"
footer.style.color = "#fff"
footer.style.position = "sticky"
footer.style.bottom = "0px"
