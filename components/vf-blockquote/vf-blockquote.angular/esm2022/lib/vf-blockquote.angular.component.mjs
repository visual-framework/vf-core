import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VfBlockquoteAngularComponent {
    constructor() {
        this.html = '';
        this.text = '';
        this.blockquote_text = '';
        this.blockquote_author = '';
        this.blockquote_author_href = '';
        this.blockquote_author_details = '';
        this.blockquote_author_imageurl = '';
        this.override_class = '';
        this.modifier = 'default';
        this.class = '';
        this.authorimgclass = '';
        this.quote = '';
    }
    ngOnInit() {
        //Initialize  something
    }
    ngOnChanges() {
        this.setValues();
    }
    /* Set values as per input and updated changes */
    setValues() {
        /* Conditional styles, strings, nullables, arrays of styles */
        this.class = this.modifier === 'default' ? 'vf-blockquote' : 'vf-blockquote-small';
        this.class += this.override_class ? this.override_class : '';
        this.authorimgclass = this.modifier === 'default' ? 'vf-profile__image vf-u-margin__right--600' : 'vf-profile__image vf-profile--medium vf-u-margin__right--600';
        /* Inner content of the quote based on whether HTML or Text */
        this.quote = this.blockquote_text
            ? this.blockquote_text
            : this.html
                ? this.html
                : this.text;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: VfBlockquoteAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.1", type: VfBlockquoteAngularComponent, selector: "vf-blockquote", inputs: { id: "id", html: "html", text: "text", blockquote_text: "blockquote_text", blockquote_author: "blockquote_author", blockquote_author_href: "blockquote_author_href", blockquote_author_details: "blockquote_author_details", blockquote_author_imageurl: "blockquote_author_imageurl", override_class: "override_class", modifier: "modifier" }, usesOnChanges: true, ngImport: i0, template: `
    <blockquote [attr.id]="id !== undefined ? id : null" [class]="class">
        <img *ngIf="blockquote_author_imageurl !== ''" [class]="authorimgclass" [src]="blockquote_author_imageurl" alt="" loading="lazy" />
        <div [class]="blockquote_author_imageurl !== '' ? 'vf-blockquote-has-image' : null">
          <div>{{ quote }}</div>
          <footer class="vf-u-margin__top--600">
            <a *ngIf="blockquote_author_href !== ''; else quoteauthorplain" class="vf-blockquote_author__link" [href]="blockquote_author_href" [innerHTML]="blockquote_author"></a>
            <ng-template #quoteauthorplain><div class="vf-blockquote_author">{{ blockquote_author }}</div></ng-template>
            <div *ngIf="blockquote_author_details !== ''" class="vf-blockquote_author__details">{{ blockquote_author_details }}</div>
          </footer>
        </div>
    </blockquote>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: VfBlockquoteAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vf-blockquote', template: `
    <blockquote [attr.id]="id !== undefined ? id : null" [class]="class">
        <img *ngIf="blockquote_author_imageurl !== ''" [class]="authorimgclass" [src]="blockquote_author_imageurl" alt="" loading="lazy" />
        <div [class]="blockquote_author_imageurl !== '' ? 'vf-blockquote-has-image' : null">
          <div>{{ quote }}</div>
          <footer class="vf-u-margin__top--600">
            <a *ngIf="blockquote_author_href !== ''; else quoteauthorplain" class="vf-blockquote_author__link" [href]="blockquote_author_href" [innerHTML]="blockquote_author"></a>
            <ng-template #quoteauthorplain><div class="vf-blockquote_author">{{ blockquote_author }}</div></ng-template>
            <div *ngIf="blockquote_author_details !== ''" class="vf-blockquote_author__details">{{ blockquote_author_details }}</div>
          </footer>
        </div>
    </blockquote>
  ` }]
        }], propDecorators: { id: [{
                type: Input
            }], html: [{
                type: Input
            }], text: [{
                type: Input
            }], blockquote_text: [{
                type: Input
            }], blockquote_author: [{
                type: Input
            }], blockquote_author_href: [{
                type: Input
            }], blockquote_author_details: [{
                type: Input
            }], blockquote_author_imageurl: [{
                type: Input
            }], override_class: [{
                type: Input
            }], modifier: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtYmxvY2txdW90ZS5hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3ZmLWJsb2NrcXVvdGUuYW5ndWxhci9zcmMvbGliL3ZmLWJsb2NrcXVvdGUuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQW1CekQsTUFBTSxPQUFPLDRCQUE0QjtJQWpCekM7UUFvQlcsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDhCQUF5QixHQUFHLEVBQUUsQ0FBQztRQUMvQiwrQkFBMEIsR0FBRyxFQUFFLENBQUM7UUFDaEMsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFHLFNBQVMsQ0FBQztRQUU5QixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztLQXlCWjtJQXZCQyxRQUFRO1FBQ04sdUJBQXVCO0lBQ3pCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxpREFBaUQ7SUFDakQsU0FBUztRQUNQLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO1FBQ25GLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRTdELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQyw4REFBOEQsQ0FBQztRQUVqSyw4REFBOEQ7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZTtZQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7WUFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDOzhHQXZDVSw0QkFBNEI7a0dBQTVCLDRCQUE0QixvYUFmN0I7Ozs7Ozs7Ozs7OztHQVlUOzsyRkFHVSw0QkFBNEI7a0JBakJ4QyxTQUFTOytCQUNFLGVBQWUsWUFDZjs7Ozs7Ozs7Ozs7O0dBWVQ7OEJBS1EsRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ0csc0JBQXNCO3NCQUE5QixLQUFLO2dCQUNHLHlCQUF5QjtzQkFBakMsS0FBSztnQkFDRywwQkFBMEI7c0JBQWxDLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZmLWJsb2NrcXVvdGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxibG9ja3F1b3RlIFthdHRyLmlkXT1cImlkICE9PSB1bmRlZmluZWQgPyBpZCA6IG51bGxcIiBbY2xhc3NdPVwiY2xhc3NcIj5cbiAgICAgICAgPGltZyAqbmdJZj1cImJsb2NrcXVvdGVfYXV0aG9yX2ltYWdldXJsICE9PSAnJ1wiIFtjbGFzc109XCJhdXRob3JpbWdjbGFzc1wiIFtzcmNdPVwiYmxvY2txdW90ZV9hdXRob3JfaW1hZ2V1cmxcIiBhbHQ9XCJcIiBsb2FkaW5nPVwibGF6eVwiIC8+XG4gICAgICAgIDxkaXYgW2NsYXNzXT1cImJsb2NrcXVvdGVfYXV0aG9yX2ltYWdldXJsICE9PSAnJyA/ICd2Zi1ibG9ja3F1b3RlLWhhcy1pbWFnZScgOiBudWxsXCI+XG4gICAgICAgICAgPGRpdj57eyBxdW90ZSB9fTwvZGl2PlxuICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJ2Zi11LW1hcmdpbl9fdG9wLS02MDBcIj5cbiAgICAgICAgICAgIDxhICpuZ0lmPVwiYmxvY2txdW90ZV9hdXRob3JfaHJlZiAhPT0gJyc7IGVsc2UgcXVvdGVhdXRob3JwbGFpblwiIGNsYXNzPVwidmYtYmxvY2txdW90ZV9hdXRob3JfX2xpbmtcIiBbaHJlZl09XCJibG9ja3F1b3RlX2F1dGhvcl9ocmVmXCIgW2lubmVySFRNTF09XCJibG9ja3F1b3RlX2F1dGhvclwiPjwvYT5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjcXVvdGVhdXRob3JwbGFpbj48ZGl2IGNsYXNzPVwidmYtYmxvY2txdW90ZV9hdXRob3JcIj57eyBibG9ja3F1b3RlX2F1dGhvciB9fTwvZGl2PjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiYmxvY2txdW90ZV9hdXRob3JfZGV0YWlscyAhPT0gJydcIiBjbGFzcz1cInZmLWJsb2NrcXVvdGVfYXV0aG9yX19kZXRhaWxzXCI+e3sgYmxvY2txdW90ZV9hdXRob3JfZGV0YWlscyB9fTwvZGl2PlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Jsb2NrcXVvdGU+XG4gIGAsXG4gIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFZmQmxvY2txdW90ZUFuZ3VsYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiBJbml0aWFsaXplIHZhbHVlcyBiYXNlZCBvbiBpbnB1dCB2YWx1ZXMgKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgaHRtbCA9ICcnO1xuICBASW5wdXQoKSB0ZXh0ID0gJyc7XG4gIEBJbnB1dCgpIGJsb2NrcXVvdGVfdGV4dCA9ICcnO1xuICBASW5wdXQoKSBibG9ja3F1b3RlX2F1dGhvciA9ICcnO1xuICBASW5wdXQoKSBibG9ja3F1b3RlX2F1dGhvcl9ocmVmID0gJyc7XG4gIEBJbnB1dCgpIGJsb2NrcXVvdGVfYXV0aG9yX2RldGFpbHMgPSAnJztcbiAgQElucHV0KCkgYmxvY2txdW90ZV9hdXRob3JfaW1hZ2V1cmwgPSAnJztcbiAgQElucHV0KCkgb3ZlcnJpZGVfY2xhc3MgPSAnJztcbiAgQElucHV0KCkgbW9kaWZpZXIgPSAnZGVmYXVsdCc7XG5cbiAgY2xhc3MgPSAnJztcbiAgYXV0aG9yaW1nY2xhc3MgPSAnJztcbiAgcXVvdGUgPSAnJztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvL0luaXRpYWxpemUgIHNvbWV0aGluZ1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZXMoKTtcbiAgfVxuXG4gIC8qIFNldCB2YWx1ZXMgYXMgcGVyIGlucHV0IGFuZCB1cGRhdGVkIGNoYW5nZXMgKi9cbiAgc2V0VmFsdWVzKCk6IHZvaWQge1xuICAgIC8qIENvbmRpdGlvbmFsIHN0eWxlcywgc3RyaW5ncywgbnVsbGFibGVzLCBhcnJheXMgb2Ygc3R5bGVzICovXG4gICAgdGhpcy5jbGFzcyA9IHRoaXMubW9kaWZpZXIgPT09ICdkZWZhdWx0JyA/ICd2Zi1ibG9ja3F1b3RlJyA6ICd2Zi1ibG9ja3F1b3RlLXNtYWxsJztcbiAgICB0aGlzLmNsYXNzICs9IHRoaXMub3ZlcnJpZGVfY2xhc3MgPyB0aGlzLm92ZXJyaWRlX2NsYXNzIDogJyc7XG5cbiAgICB0aGlzLmF1dGhvcmltZ2NsYXNzID0gdGhpcy5tb2RpZmllciA9PT0gJ2RlZmF1bHQnID8gJ3ZmLXByb2ZpbGVfX2ltYWdlIHZmLXUtbWFyZ2luX19yaWdodC0tNjAwJyA6ICd2Zi1wcm9maWxlX19pbWFnZSB2Zi1wcm9maWxlLS1tZWRpdW0gdmYtdS1tYXJnaW5fX3JpZ2h0LS02MDAnO1xuXG4gICAgLyogSW5uZXIgY29udGVudCBvZiB0aGUgcXVvdGUgYmFzZWQgb24gd2hldGhlciBIVE1MIG9yIFRleHQgKi9cbiAgICB0aGlzLnF1b3RlID0gdGhpcy5ibG9ja3F1b3RlX3RleHRcbiAgICAgID8gdGhpcy5ibG9ja3F1b3RlX3RleHRcbiAgICAgIDogdGhpcy5odG1sXG4gICAgICA/IHRoaXMuaHRtbFxuICAgICAgOiB0aGlzLnRleHQ7XG4gIH1cbn1cbiJdfQ==