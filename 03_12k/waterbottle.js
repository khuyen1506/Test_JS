class Waterbottle {
  constructor (
    name,
    material,
    color,
    bodylengthW,
    bodylengthH,
    lidOpen,
    dateExpire
  )
  {
    this.name = name;
    this.material = material;
    this.color = color;
    this.bodylength = {
      Height: bodylengthH,
      Width: bodylengthW
    };
    this.lidOpen = lidOpen;
    this.dateExpire = dateExpire;
  }
  Stalid(lidStatus) {
    this.lidOpen = lidStatus;
    // updateWaterbottle(`Lid status changed.`);
  }
  newBodyLength(lengthHeight, lengthWidth) {
    this.bodylength.bodylengthH = lengthHeight;
    this.bodylength.bodylengthW = lengthWidth;
  }
  DateExpire() {
    let now = new Date();
    let acquired = new Date(this.dateExpire);
    let elapsed = now - acquired; // so date con han
    let SinceDateExpire = Math.floor(elapsed / (1000 * 3600 * 24));
    return SinceDateExpire;

  }
}
export default Waterbottle;