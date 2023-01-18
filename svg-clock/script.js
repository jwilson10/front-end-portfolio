const minuteHand = document.getElementById("minuteHand");
const hourHand = document.getElementById("hourHand");
const secondHand = document.getElementById("secondHand");


function animate(){
    const now = new Date();
    const hour = now.getHours() + now.getMinutes() / 60;
    const minute = now.getMinutes() + now.getSeconds() / 60;
    const second = now.getSeconds();

    hourHand.setAttribute('transform', `rotate(${360/12 * hour})`);
    minuteHand.setAttribute('transform', `rotate(${360/60 * minute})`);
    secondHand.setAttribute('transform', `rotate(${360/60 * second})`);

    requestAnimationFrame(animate);
}


requestAnimationFrame(animate);

