import { ErrorHandler } from '@angular/core';

export class ErrorAlerter implements ErrorHandler {
  handleError(error) {
    alert(error.stack);
  }
}
