$(function(){
    $('.visual').slick({
        // autoplay:true,
        arrows:false,
        fade:true
      });
    let video_tit =['D TOWER','Yi Sun Sin Bridge','Petrochemical Plant']
    let video_sub =['도시를 개발하다.','세계 6번째 현수교 기술자립국, 세계최고의 기술력, DL이앤씨.','1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년.']
    let video_list =["https://www.youtube.com/embed/lAJ3SGjbdr4","https://www.youtube.com/embed/x4DWU4HG5dE","https://www.youtube.com/embed/gehtA1gfXPc"]

      $('.btn_close').click(function(){
          $('.modal_wrap').fadeOut(300);
        $('.modal_wrap iframe').attr('src','')

      });

      // 모바일 버튼을 클릭하면 전체메뉴 보이기
      $('.m_btn').click(function(){
        $('.allmenu_wrap').show()
      });
      //종료버튼
      $('.btn_allclose').click(function(){
        $('.allmenu_wrap').hide()
      })
      //전체 메뉴 슬라이더
      $('.all_menu_slide').slick({
         autoplay:true,
         arrows:false,
         dots:true,
      });
      // 정지/재생버튼
      sw=true
      $('.btn_pause').click(function(){
        if(sw==true){
          $(this).addClass('on')
          $('.all_menu_slide').slick('slickPause')
          sw=false
        }
        else{
          $(this).removeClass('on')
          $('.all_menu_slide').slick('slickPlay')
          sw=true
        }
      });
        // util search 버튼 
      $('.btn_search').click(function(){
        $('.search_form').slideToggle(300);
        // $('input').slideToggle()
      })
      $('.search_form').mouseleave(function(){
        $('.search_form').slideUp(300);
      })

      //  list li 마우스 mouseenter 하면 slick 슬라이더 배경이미지 변경
      $('.list li').mouseenter(function(){
        let num = $(this).index();
        console.log(num);
        $('.visual').slick('slickGoTo',num)

      });
      //list li를 클릭하면 모달 팝업 띄우기
      $('.list li').click(function(){
        let num = $(this).index();
        console.log(num);
        $('.modal_wrap').fadeIn()

        $('.modal_tit').text(video_tit[num])
        $('.modal_sub').text(video_sub[num])
        $('.modal_wrap iframe').attr('src',video_list[num])
        
        // modal_next
        $('.btn_next').click(function(){
          if(num==2){ num=0; }
          else{ num++;}
          $('.modal_tit').text(video_tit[num])
        $('.modal_sub').text(video_sub[num])
        $('.modal_wrap iframe').attr('src',video_list[num])
        })

        // modal_prev
        $('.btn_prev').click(function(){
          if(num==0){ num=2; }
          else{ num--;}
          $('.modal_tit').text(video_tit[num])
        $('.modal_sub').text(video_sub[num])
        $('.modal_wrap iframe').attr('src',video_list[num])
        })

      });

      // ----사이트맵---

      $('.b1').click(function(){
        $(this).toggleClass('on');
        $('.b2').removeClass('on')
        $('.fw_2').removeClass('on');
        $('.fw_1').toggleClass('on');
        
      });

      $('.b2').click(function(){
        $(this).toggleClass('on');
        $('.b1').removeClass('on');
        $('.fw_1').removeClass('on');
        $('.fw_2').toggleClass('on');
        
      });
    

      $('h2 span').click(function(){
        $('.family_wrap').removeClass('on');
        $('.btn_f').removeClass('on');
        
      });

// -----2단메뉴 슬라이드-----

      $('.gnb li').mouseenter(function(){
        $('.depth2_wrap').stop().slideDown(200);
        $('.gnb>li .depth2').stop().slideDown(200);
      })
      $('.header').mouseleave(function(){
        $('.depth2_wrap').stop().slideUp(200);
        $('.gnb>li .depth2').stop().slideUp(200);

      });

      // ---유튜브 동영상 다음 버튼을 클릭하면 배열에맞게 다음동영상으로 이동 마지막일떄는 처음으로 이동----

      
     
      
});