package TestBHDStar.entity;

import java.util.Date;

public class MovieEntity extends BaseEntity {
 private String title;
 private String src;
 private String trailer;
 private String classify;
 private String director;
 private String actor;
 private String type;
 private Date startDate;
 private int length;
 private String language;
 private String alt;

 public MovieEntity() {
 }

 public MovieEntity(String title, String src, String trailer, String classify, String director,
                    String actor, String type, Date startDate, int length, String language, String alt) {
  this.title = title;
  this.src = src;
  this.trailer = trailer;
  this.classify = classify;
  this.director = director;
  this.actor = actor;
  this.type = type;
  this.startDate = startDate;
  this.length = length;
  this.language = language;
  this.alt = alt;
 }

 public MovieEntity(String title, String src, String alt) {
  this.title = title;
  this.src = src;
  this.alt = alt;
 }

 public String getSrc() {
  return src;
 }

 public void setSrc(String src) {
  this.src = src;
 }

 public String getAlt() {
  return alt;
 }

 public void setAlt(String alt) {
  this.alt = alt;
 }

 public String getTitle() {
  return title;
 }

 public void setTitle(String title) {
  this.title = title;
 }



 public String getTrailer() {
  return trailer;
 }

 public void setTrailer(String trailer) {
  this.trailer = trailer;
 }

 public String getClassify() {
  return classify;
 }

 public void setClassify(String classify) {
  this.classify = classify;
 }

 public String getDirector() {
  return director;
 }

 public void setDirector(String director) {
  this.director = director;
 }

 public String getActor() {
  return actor;
 }

 public void setActor(String actor) {
  this.actor = actor;
 }

 public String getType() {
  return type;
 }

 public void setType(String type) {
  this.type = type;
 }

 public Date getStartDate() {
  return startDate;
 }

 public void setStartDate(Date startDate) {
  this.startDate = startDate;
 }

 public int getLength() {
  return length;
 }

 public void setLength(int length) {
  this.length = length;
 }

 public String getLanguage() {
  return language;
 }

 public void setLanguage(String language) {
  this.language = language;
 }

 @Override
 public String toString() {
  return "Movie{" +
          "title='" + title + '\'' +
          ", src='" + src + '\'' +
          ", trailer='" + trailer + '\'' +
          ", classify='" + classify + '\'' +
          ", director='" + director + '\'' +
          ", actor='" + actor + '\'' +
          ", type='" + type + '\'' +
          ", startDate=" + startDate +
          ", length=" + length +
          ", language='" + language + '\'' +
          ", alt='" + alt + '\'' +
          '}';
 }
}
