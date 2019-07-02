const playPass = (s,n) => {
let fStep = s.replace(/[A-z]/g, (i) => s = String.fromCharCode((i.charCodeAt() - 65 + n) % 26 + 65))
let sStep = fStep.replace(/[0-9]/g, (i) => 9 - i)
let tStep = [...sStep].map((l,i) => i % 2 == 0 ? l : l.toLowerCase())
return tStep.reverse().join('')
}
