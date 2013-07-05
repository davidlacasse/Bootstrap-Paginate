##Bootstrap-Paginate

####How to use
Basically, the only thing that is required is the placement of the `<div class="pagination" />` and the addition of the following code your page:<br/>

    $(document).ready(function(){
      $('.table').paginate();
    });

####Options
This plugin has several options to fit the way your application works. To make it more flexible within your application, you must set the options this way:

    $('table').paginate(options);

In this case, options is an array. You can set the following parameters that way:

<table>
  <thead>
    <tr>
      <td>
        <b>Name</b>
      </td>
      <td>
        <b>type</b>
      </td>
      <td>
        <b>default</b>
      </td>
      <td>
        <b>description</b>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        pageSize
      </td>
      <td>
        number
      </td>
      <td>
        10
      </td>
      <td>
        This sets the number of items that will appeared per page.
      </td>
    </tr>
      <tr>
      <td>
        navButtons
      </td>
      <td>
        boolean
      </td>
      <td>
        true
      </td>
      <td>
        Hide/Show the navigation buttons that allow you to switch to the previous or next page.
      </td>
    </tr>
  </tbody>
</table>
