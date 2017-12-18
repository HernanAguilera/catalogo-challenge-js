import miniToastr from 'mini-toastr'

miniToastr.init()
miniToastr.setIcon('error', 'i', {
  'class': 'fa fa-times'
})
miniToastr.setIcon('warn', 'i', {
  'class': 'fa fa-exclamation-triangle'
})
miniToastr.setIcon('info', 'i', {
  'class': 'fa fa-info-circle'
})
miniToastr.setIcon('success', 'i', {
  'class': 'fa fa-arrow-circle-o-down'
})

export default class Notifications{

  static success (message, title = 'Success') {
    miniToastr.success(message, title)
  }

  static info (message, title = 'Info') {
    miniToastr.info(message, title)
  }

  static warning (message, title = 'Warning') {
    miniToastr.warn(message, title)
  }

  static error (message, title = 'Error') {
    miniToastr.error(message, title)
  }
}
