
function BaseView() {
    this.rootElement = document.createElement('div');
}

BaseView.prototype.show = function (element) {
    this.beforeRender();
    this.rootElement.innerHTML = this.render();
    this.rootElement.classList.add(this.className);
    element.appendChild(this.rootElement);
    this.afterRender();
}

BaseView.prototype.beforeUpdate = function () {};

BaseView.prototype.reRender = function () {
    this.beforeUpdate();
    this.rootElement.innerHTML = this.render();
    this.afterUpdate();
}

BaseView.prototype.afterUpdate = function () {};