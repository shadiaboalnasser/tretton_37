# tretton_37

This project is a simple view to show fellowship of tretton 37 was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

#### My points are:
* Fancy animations.
* Responsive design, works on mobile and tablets.
* Screen reader functionality.
* Sort by name and office .
* Filter by name and office.
* Enable switch between a grid and a different view.
* Only render a set of profiles using pagination.
* Works in Chrome, Firefox,Edge.
* Unit tests for existing functionality.
* I would like to have done more but I got 12 points which is the max.

## Run the project
* Need to install nodejs v12.14.1 or above or nodejs 14.0.0 or above.
* In terminal run :
  1. `git clone https://github.com/shadiaboalnasser/tretton_37.git`
  2. `cd employees-app`
  3. `npm install`
  4. `ng serve` navigate to `http://localhost:4200/`.
 * Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
 * Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Dependencies used:
1. ng-bootstrap for the pagination
2. ngx-toastr for error message
3. bootstrap and font-awsom for a few styles

#### Notes have taken:
* Fancy animations can be much more (all depends on what stakeholder/client want).
* It's my first time with screen reader (with I did enough), I installed an chrome extentions screen reader.
* I have started to implement both search for employee name and office in a search input, but then I noticed some employees have `lund` included in their names so decided to have a seperate filter for offices and use search input just for employees names, BTW both filters can work together.
* We can use several ways to do sort and filters but I chose to not use a build in functions since it's an assignment.
* I used ReSharper extention in Visual Studio to check styles work across Chrome, Firefox and Edge.
