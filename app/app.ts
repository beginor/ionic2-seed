import {App, IonicApp} from 'ionic-angular';

@App({
    template: `
        <ion-toolbar>
            <ion-title>Default Buttons</ion-title>
        </ion-toolbar>
        
        <ion-content padding style="text-align:center">
        
            <p>
                <button><span>Default</span></button>
                <button class="activated">Default.activated</button>
            </p>
        
            <p>
                <button primary>Primary</button>
                <button primary class="activated">Primary.activated</button>
            </p>
        
            <p>
                <button secondary>Secondary</button>
                <button secondary class="activated">Secondary.activated</button>
            </p>
        
            <p>
                <button danger>Danger</button>
                <button danger class="activated">Danger.activated</button>
            </p>
        
            <p>
                <button light>Light</button>
                <button light class="activated">Light.activated</button>
            </p>
        
            <p>
                <button dark>Dark</button>
                <button dark class="activated">Dark.activated</button>
            </p>
        
            <p>
                <button disabled>Disabled</button>
            </p>
        
            <p>
                <button [color]="btnColor" (click)="chgColor()">Change Color</button>
                <button outline [color]="btnColor" (click)="chgColor()">Change Color</button>
            </p>
        
        </ion-content>
    `
})
export class E2EApp {

    testingColors:string[];
    testingColorIndex:number;
    btnColor:string;

    constructor(app:IonicApp) {
        app.setTitle('Basic Buttons');

        this.testingColors = ['primary', 'secondary', 'danger', 'dark'];
        this.testingColorIndex = 0;
        this.chgColor();
    }

    chgColor() {
        this.btnColor = this.testingColors[this.testingColorIndex];
        console.log('dynamic btnColor', this.btnColor);
        this.testingColorIndex = (this.testingColorIndex >= this.testingColors.length - 1 ? 0 : this.testingColorIndex + 1);
    }
}
