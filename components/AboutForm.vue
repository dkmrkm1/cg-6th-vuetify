<template>
  <div id="form-main">
    <div id="form-div">
      <form class="form" id="form1" name="contact" netlify-honeypot="bot-field" data-netlify="true" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden"  style="display: none;">
          <label>Don’t fill this out: <input name="bot-field"></label>
        </p>
        <p class="name">
          <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
        </p>
        <p class="email">
          <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
        </p>
        <p class="text">
          <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
        </p>
        <div class="submit">
          <input type="submit" value="SEND" id="button-blue"/>
          <div class="ease"></div>
        </div>
      </form>
    </div>
  </div>




  <!-- <form name="contact" netlify-honeypot="bot-field" action="thank-you"  data-netlify="true" method="post">
    <input type="hidden" name="form-name" value="contact" />
    <p class="hidden"  style="display: none;">
      <label>Don’t fill this out: <input name="bot-field"></label>
    </p>
    <p>
      <label>Email: <input type="text" name="name"></label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type=”submit”>Send</button>
    </p>
  </form> -->
</template>

<script>
export default {}
</script>

<style scoped>
#form-main {
  background: pink;
}
</style>
