import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'content-loading',
  templateUrl: 'build/components/content-loading/content-loading.html',
  // styles: ['build/components/content-loading/content-loading.scss']
})
export class ContentLoading {
  public errorMessage = ""
  @Output() retryClicked = new EventEmitter();

  retry() {
    this.retryClicked.emit({});
  }
}
