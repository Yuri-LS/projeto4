const btnParzival = document.getElementById('parzival');
const modalParzival = document.getElementById('modalParzival');
const btnArtemis = document.getElementById('artemis');
const modalArtemis = document.getElementById('modalArtemis');
const btnAnorak = document.getElementById('anorak');
const modalAnorak = document.getElementById('modalAnorak');
const btnNolan = document.getElementById('nolan');
const modalNolan = document.getElementById('modalNolan');

const btnClose = document.getElementById('btnClose');

btnParzival.onclick = function() {
    modalParzival.showModal()
}
btnArtemis.onclick = function() {
    modalArtemis.showModal()
}
btnAnorak.onclick = function() {
    modalAnorak.showModal()
}
btnNolan.onclick = function() {
    modalNolan.showModal()
}


btnCloseParzival.onclick = function () {
    modalParzival.close();
}
btnCloseArtemis.onclick = function () {
    modalArtemis.close();
}
btnCloseAnorak.onclick = function () {
    modalAnorak.close();
}
btnCloseNolan.onclick = function () {
    modalNolan.close();
}