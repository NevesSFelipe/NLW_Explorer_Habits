const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const data = {
    run: ["01-01", "01-02", "01-03"],
    water: ["01-05", "01-09", "01-10"],
    food: ["01-04", "01-07", "01-08"],
}

nlwSetup.setData(data);
nlwSetup.load();