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
var core_1 = require('@angular/core');
var AppServices = (function () {
    function AppServices() {
    }
    AppServices.prototype.getData = function () {
        return [{
                id: 1,
                time: '8:00 AM',
                task: 'Drinking a pint of lemon water' },
            { id: 2,
                time: '8:15 AM',
                task: 'Preparing and drinking a nutritious smoothie' },
            { id: 3,
                time: '9:00 AM',
                task: 'Reviewing my goals' },
            { id: 4,
                time: '6:00 PM',
                task: 'Writing down two to four important tasks for the day' }];
    };
    AppServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppServices);
    return AppServices;
}());
exports.AppServices = AppServices;
//# sourceMappingURL=app.services.js.map