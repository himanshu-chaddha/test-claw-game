init();

function init() {

    let minPoint = Infinity, cId, gId, chickenPoints = [], goatPoints = [];
    let chickensAndGoats = prompt(`Please enter the number of stuffed chickens and goats
Eg. C G
where C >= 1 and G >= 1`)
    let inp = chickensAndGoats.split(" ");
    let stuffedChickens = Number(inp[0]), stuffedGoats = Number(inp[1]);

    if (stuffedChickens < 1) {
        alert("Please provide number of chickens greater than 1");
        document.write(`<div><strong>Invalid input! please try again with valid inputs</strong></div>`)
        return;
    }

    if (stuffedGoats < 1) {
        alert("Please provide number of goats greater than 1");
        document.write(`<div><strong>Invalid input! please try again with valid inputs</strong></div>`)
        return;
    }

    function shortestDistance(p1, p2) {
        if (!p1.x || !p1.y || !p2.x || !p2.y) {
            document.write(`<div>Coordinates missing in givinn points!</div>`)
            return
        }

        return Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2))
    }

    function pushPoint(num, arr, str) {
        for (let i = 0; i < num; i++) {
            let points = prompt(`Enter the ${str} Id with X and Y coordinates
        Eg. Id X Y`);
            pointInput = points.split(" ");
            arr.push({ id: pointInput[0], cordinates: { x: pointInput[1], y: pointInput[2] } })
        }
    }

    pushPoint(stuffedChickens, chickenPoints, "Chicken");
    pushPoint(stuffedGoats, goatPoints, "Goat");

    if (chickenPoints[0].id)
        cId = chickenPoints[0].id;
    if (goatPoints[0].id)
        gId = goatPoints[0].id;

    for (let i = 0; i < chickenPoints.length; i++) {
        let p1 = chickenPoints[i].cordinates;
        for (let j = 0; j < goatPoints.length; j++) {
            let p2 = goatPoints[j].cordinates;
            let sd = shortestDistance(p1, p2);
            if (sd < minPoint) {
                cId = chickenPoints[i].id;
                gId = goatPoints[j].id;
                minPoint = sd;
            }
        }
    }

    if (cId && gId) {
        document.write(`<div>
        <h2 >Output : Closest pair of stuffed farm animals is</h2>
        <Goat>Chicken Id : ${cId}  and Goat Id : ${gId} </p></div>`)
    } else {
        document.write(`<div>Something went wrong! please try again with valid inputs</div>`)
    }
}
