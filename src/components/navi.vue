<template>
    <div id="navi" class="navi-style">
  <b-navbar toggleable="lg" type="success" variant="dark">
    <b-navbar-brand href="#">MyFirstAPP</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item calss="rstyle">  <router-link to="/foo">#1  </router-link></b-nav-item>
        <b-nav-item >  <router-link to="/second">#2  </router-link></b-nav-item>
        <b-nav-item >  <router-link to="/third">#3  </router-link></b-nav-item>
        <b-nav-item >  <router-link to="/forth">#4  </router-link></b-nav-item>
        <b-nav-item >  <router-link to="/fifth">#5 </router-link></b-nav-item>
        <b-nav-item >  <router-link to="/sixth">#6 </router-link></b-nav-item>
        <b-nav-item >  <router-link to="/seventh">#7 </router-link></b-nav-item>
        <b-nav-item >  <router-link to="/eight">#8 </router-link></b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style scoped>
  a {
  color: white;
  font-weight: bold;

}

    .navi-style {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;
  }
</style>