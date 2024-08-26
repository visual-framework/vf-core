import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class VfBackToTopAngularComponent {
    ngOnChanges() {
        this.text = this.text || 'Back to top';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: VfBackToTopAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.1", type: VfBackToTopAngularComponent, selector: "vf-back-to-top", inputs: { type: "type", text: "text", scrollToId: "scrollToId", example: "example" }, usesOnChanges: true, ngImport: i0, template: `
      <div
        class="vf-back-to-top vf-back-top--{{ type }}"
        data-vf-js-back-to-top
        [attr.vf-back-top--floating]="type === 'floating' ? '' : null"
      >
        <a
          [href]="scrollToId !== undefined ? '#' + scrollToId : null"
          [attr.data-scroll-to-id]="
            scrollToId !== undefined ? scrollToId : null
          "
          class="vf-button vf-button--secondary vf-button--sm"
          [attr.aria-label]="text"
        >
          <svg
            class="vf-icon vf-icon--search-btn | vf-button__icon"
            viewBox="0 0 140 140"
            width="16"
            height="16"
          >
            <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
              <path
                d="M23.421,11.765,13.768.8A2.641,2.641,0,0,0,12,0a2.645,2.645,0,0,0-1.768.8L.579,11.765A1.413,1.413,0,1,0,2.7,13.632l7.45-8.466a.25.25,0,0,1,.437.166V22.587a1.413,1.413,0,1,0,2.826,0V5.332a.25.25,0,0,1,.438-.165L21.3,13.632a1.413,1.413,0,1,0,2.121-1.867Z"
                fill="#3b6fb6"
                stroke="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
              ></path>
            </g>
          </svg>
          {{ text }}
        </a>
      </div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: VfBackToTopAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vf-back-to-top', template: `
      <div
        class="vf-back-to-top vf-back-top--{{ type }}"
        data-vf-js-back-to-top
        [attr.vf-back-top--floating]="type === 'floating' ? '' : null"
      >
        <a
          [href]="scrollToId !== undefined ? '#' + scrollToId : null"
          [attr.data-scroll-to-id]="
            scrollToId !== undefined ? scrollToId : null
          "
          class="vf-button vf-button--secondary vf-button--sm"
          [attr.aria-label]="text"
        >
          <svg
            class="vf-icon vf-icon--search-btn | vf-button__icon"
            viewBox="0 0 140 140"
            width="16"
            height="16"
          >
            <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
              <path
                d="M23.421,11.765,13.768.8A2.641,2.641,0,0,0,12,0a2.645,2.645,0,0,0-1.768.8L.579,11.765A1.413,1.413,0,1,0,2.7,13.632l7.45-8.466a.25.25,0,0,1,.437.166V22.587a1.413,1.413,0,1,0,2.826,0V5.332a.25.25,0,0,1,.438-.165L21.3,13.632a1.413,1.413,0,1,0,2.121-1.867Z"
                fill="#3b6fb6"
                stroke="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
              ></path>
            </g>
          </svg>
          {{ text }}
        </a>
      </div>
  ` }]
        }], propDecorators: { type: [{
                type: Input
            }], text: [{
                type: Input
            }], scrollToId: [{
                type: Input
            }], example: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtYmFjay10by10b3AuYW5ndWxhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92Zi1iYWNrLXRvLXRvcC5hbmd1bGFyL3NyYy9saWIvdmYtYmFjay10by10b3AuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBeUNqRCxNQUFNLE9BQU8sMkJBQTJCO0lBT3RDLFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDO0lBQ3pDLENBQUM7OEdBVFUsMkJBQTJCO2tHQUEzQiwyQkFBMkIsaUtBckM1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDVDs7MkZBR1UsMkJBQTJCO2tCQXZDdkMsU0FBUzsrQkFDRSxnQkFBZ0IsWUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ1Q7OEJBS1EsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmYtYmFjay10by10b3AnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInZmLWJhY2stdG8tdG9wIHZmLWJhY2stdG9wLS17eyB0eXBlIH19XCJcbiAgICAgICAgZGF0YS12Zi1qcy1iYWNrLXRvLXRvcFxuICAgICAgICBbYXR0ci52Zi1iYWNrLXRvcC0tZmxvYXRpbmddPVwidHlwZSA9PT0gJ2Zsb2F0aW5nJyA/ICcnIDogbnVsbFwiXG4gICAgICA+XG4gICAgICAgIDxhXG4gICAgICAgICAgW2hyZWZdPVwic2Nyb2xsVG9JZCAhPT0gdW5kZWZpbmVkID8gJyMnICsgc2Nyb2xsVG9JZCA6IG51bGxcIlxuICAgICAgICAgIFthdHRyLmRhdGEtc2Nyb2xsLXRvLWlkXT1cIlxuICAgICAgICAgICAgc2Nyb2xsVG9JZCAhPT0gdW5kZWZpbmVkID8gc2Nyb2xsVG9JZCA6IG51bGxcbiAgICAgICAgICBcIlxuICAgICAgICAgIGNsYXNzPVwidmYtYnV0dG9uIHZmLWJ1dHRvbi0tc2Vjb25kYXJ5IHZmLWJ1dHRvbi0tc21cIlxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwidGV4dFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzcz1cInZmLWljb24gdmYtaWNvbi0tc2VhcmNoLWJ0biB8IHZmLWJ1dHRvbl9faWNvblwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE0MCAxNDBcIlxuICAgICAgICAgICAgd2lkdGg9XCIxNlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDUuODMzMzMzMzMzMzMzMzMzLDAsMCw1LjgzMzMzMzMzMzMzMzMzMywwLDApXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yMy40MjEsMTEuNzY1LDEzLjc2OC44QTIuNjQxLDIuNjQxLDAsMCwwLDEyLDBhMi42NDUsMi42NDUsMCwwLDAtMS43NjguOEwuNTc5LDExLjc2NUExLjQxMywxLjQxMywwLDEsMCwyLjcsMTMuNjMybDcuNDUtOC40NjZhLjI1LjI1LDAsMCwxLC40MzcuMTY2VjIyLjU4N2ExLjQxMywxLjQxMywwLDEsMCwyLjgyNiwwVjUuMzMyYS4yNS4yNSwwLDAsMSwuNDM4LS4xNjVMMjEuMywxMy42MzJhMS40MTMsMS40MTMsMCwxLDAsMi4xMjEtMS44NjdaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzNiNmZiNlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjBcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIHt7IHRleHQgfX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFZmQmFja1RvVG9wQW5ndWxhckNvbXBvbmVudCB7XG4gIC8qIEluaXRpYWxpemUgdmFsdWVzIGJhc2VkIG9uIGlucHV0IHZhbHVlcyAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgc2Nyb2xsVG9JZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBleGFtcGxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMudGV4dCA9IHRoaXMudGV4dCB8fCAnQmFjayB0byB0b3AnO1xuICB9XG59XG4iXX0=