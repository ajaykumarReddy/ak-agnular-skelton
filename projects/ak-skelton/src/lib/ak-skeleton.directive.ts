import { Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";
import { AkSkeltonComponent } from "./ak-skelton.component";


@Directive({ selector: '[skeleton]' })
export class SkeletonDirective {
    @Input('skeleton') isLoading = false;
    @Input('skeletonRepeat') size = 1;
    @Input('skeletonWidth') width!: string;
    @Input('skeletonHeight') height!: string;
    @Input('skeletonClassName') className!: string;
    @Input('skeletonBgColor') bgColor!: string;


    constructor(private tpl: TemplateRef<any>,
        private vcr: ViewContainerRef) { }


    ngOnChanges(changes: SimpleChanges | any) {
        if (changes.isLoading) {
            this.vcr.clear();
            if (changes.isLoading.currentValue) {
                Array.from({ length: this.size }).forEach(() => {
                    const ref = this.vcr.createComponent(AkSkeltonComponent);

                    Object.assign(ref.instance, {
                        width: this.width === 'rand' ? `${Math.floor(Math.random() * (90 - 30 + 1)) + 30}%` : this.width,
                        height: this.height,
                        className: this.className,
                        bgColor: this.bgColor
                    })
                });
            } else {
                this.vcr.createEmbeddedView(this.tpl);
            }
        }
    }
}