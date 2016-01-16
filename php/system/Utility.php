<?php

trait Utility {
    public static function logErr ($msg, $path) {
        $fp = fopen ($path, 'a');
        fwrite ($fp, $msg."\n");
        fclose ($fp);
    }
}