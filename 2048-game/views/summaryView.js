function SummaryView() {
    this.summaryModel = new SummaryModel();
    this.template = document.getElementById('summaryTemplate').innerHTML;
}

SummaryView.prototype.render = function () {
    return templateStr(this.template, this.summaryModel.attributes);
}