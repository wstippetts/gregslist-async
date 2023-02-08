
export class Car {

    constructor(data) {
        this.id = data.id || ''
        this.createdAt = data.createdAt
        this.description = data.description
        this.pic = data.imgUrl
        this.make = data.make
        this.model = data.model
        this.price = data.price
        this.year = data.year
    }

    get CarCardTemplate() {
        return /*html*/`
        <div class="col-md-4 mb-3">
        <div class="card elevation-2 car" onclick="app.carsController.setActiveCar('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
        <img
        src="${this.pic}"
        alt="${this.make}" class="rounded car-img">
          <div class="card-body">
          <p><b>${this.make} ${this.model} - $${this.price}</b></p>
            <p>${this.description ? this.description : "It's a car"}</p>
            <div class="d-flex justify-content-between">
            <button class="btn ms-1 btn-danger" type="button" onclick="app.carsController.removeCar('${this.id}')">Delete Car!</button>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-1 btn-info" type="button" onclick="app.carsController.drawForm('${this.id}')">Edit Car!</button>
            </div>
            </div>
        </div>
      </div>
       
       
    `
    }


    get CarDetailsTemplate() {
        return /*html*/`
        <div>
            <button class="btn btn-danger" data-bs-dismiss="modal" onclick="app.carsController.deleteCar('${this.id}')">DELETE THE CAR!!!!!</button>
        </div>
    `
    }



    static CarForm() {
        return /*html*/`
    <form onsubmit="app.carsController.handleFormSubmit()">
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="make" required minlength="3" maxlength="20">
            <label for="make">Make</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="model" required>
            <label for="model">Model</label>
        </div>
        <div class="form-floating mb-3">
            <input type="number" class="form-control" name="year" required min="1886" max="9999">
            <label for="year">Year</label>
        </div>
        <div class="form-floating mb-3">
            <input type="number" class="form-control" name="price" required min="0">
            <label for="price">Price</label>
        </div>
        <div class="form-floating mb-3">
            <input type="url" class="form-control" name="imgUrl">
            <label for="pic">Image Url <i>(We are too lazy for uploads)</i></label>
        </div>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
            <label for="description">Description</label>
        </div>
        <div class="d-flex my-4 gap-5 align-items-center">
            <button class="btn" type="reset">Cancel</button>
            <button class="btn btn-primary" type="submit" data-bs-dismiss="offcanvas">Submit</button>
        </div>
    </form>
    `
    }


}