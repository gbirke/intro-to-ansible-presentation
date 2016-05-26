<html>
  <head>
    <title>Welcome to <?php echo $_SERVER['SERVER_NAME']; ?>!</title>
  </head>
  <body>
    <h1>Success! The <?php echo $_SERVER['SERVER_NAME']; ?> virtual host is working!</h1>
    <p><?php
        $remoteName = empty( $_SERVER['REMOTE_HOST'] ) ? $_SERVER['REMOTE_ADDR'] : $_SERVER['REMOTE_HOST'];
        printf( 'Generated at %s for %s.', date( 'Y-m-d H:i:s' ), $remoteName );
    ?></p>
  </body>
</html>
