"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var phone_service_1 = require("./phone.service");
var PhonesComponent = (function () {
    function PhonesComponent(phoneService, router) {
        this.phoneService = phoneService;
        this.router = router;
    }
    PhonesComponent.prototype.getPhones = function () {
        var _this = this;
        this.phoneService
            .getPhones()
            .then(function (phones) { return _this.phones = phones; });
    };
    // add new phone function
    PhonesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.phoneService.create(name)
            .then(function (phone) {
            _this.phones.push(phone);
            _this.selectedPhone = null;
        });
    };
    // delete function
    PhonesComponent.prototype.delete = function (phone) {
        var _this = this;
        this.phoneService
            .delete(phone.id)
            .then(function () {
            _this.phones = _this.phones.filter(function (h) { return h !== phone; });
            if (_this.selectedPhone === phone) {
                _this.selectedPhone = null;
            }
        });
    };
    PhonesComponent.prototype.ngOnInit = function () {
        this.getPhones();
    };
    PhonesComponent.prototype.onSelect = function (phone) {
        this.selectedPhone = phone;
    };
    PhonesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPhone.id]);
    };
    return PhonesComponent;
}());
PhonesComponent = __decorate([
    core_1.Component({
        selector: 'my-phones',
        templateUrl: './phones.component.html',
        styleUrls: ['./phones.component.css']
    }),
    __metadata("design:paramtypes", [phone_service_1.PhoneService,
        router_1.Router])
], PhonesComponent);
exports.PhonesComponent = PhonesComponent;
//# sourceMappingURL=phones.component.js.map