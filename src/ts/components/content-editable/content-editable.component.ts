import {Directive, ElementRef, Input, Output, OnChanges, EventEmitter} from "@angular/core";
 
@Directive({
    selector: '[contenteditableModel]',
    host: {
        '(blur)': 'onBlur()'
    }
})
export class ContentEditable implements OnChanges {

    @Input('contenteditableModel') model: any;
    @Output('contenteditableModelChange') update = new EventEmitter();
 
    private lastViewModel: any;
 
 
    constructor(private elRef: ElementRef) {
    }
 
    ngOnChanges(changes) {
        
        this.lastViewModel = this.model
        this.refreshView()
        
    }
 
    onBlur() {
        var value = this.elRef.nativeElement.innerText
        this.lastViewModel = value
        this.update.emit(value)
    }
 
    private refreshView() {
        this.elRef.nativeElement.innerText = this.model
    }
}