let participantes =["Marcos", "Fernanda", "Juliana"];
console.log(participantes);

participantes.push("Gabriel");
console.log(participantes)

participantes.unshift("Patrícia");
console.log(participantes);

console.log(participantes.length);

console.log(participantes.includes("Juliana"));

console.log(participantes.includes("Carlos"));

console.log(participantes.indexOf("Fernanda"));

participantes.pop();
console.log(participantes);

let ParticipanteString = participantes.join(" | ");
console.log(ParticipanteString);